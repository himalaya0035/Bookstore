
async function getJsonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function constructSection(url,callback,sectionName) {
    const jsonData = await getJsonData(url); // Making Api request here
    if (callback && sectionName){
        return callback(jsonData,sectionName)
    }
    else if (callback) {
        return callback(jsonData); // this will return html after filling the html with JsonData
    }

    else {
        return Error('Bc callback to pass kr');
    }   
}



