import { parse as csvParser } from 'papaparse'
import csvFilePathLarge from '../data/largeSampleData.csv'
import csvFilePathSmall from '../data/smallSampleData.csv'
import TreeData from './TreeData.js'

// Loads and returns the sample tree data object
async function loadSampleFile(useSmall) {
    try {
        return parseTreeData(await loadFile(
            useSmall ? csvFilePathSmall : csvFilePathLarge))
    } catch (err) {
        console.log(err)
        return []
    }
}

// Parses the default csv data object, constructs and returns a tree data object
function parseTreeData(csvData) {
    const treeData = new TreeData()
    for (const item of csvData) {
        treeData.addChild(item.parent_id, item.id, item.name, item.value)
    }
    return treeData.root
}

// Loads the given csv data file contents into an object 
async function loadFile(filePath) {
    return new Promise((resolve, reject) => {
        csvParser(filePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: (results) => resolve(results.data),
            error: reject
        })
    })
}

export default { loadSampleFile }