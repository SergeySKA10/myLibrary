import Els from '../core';

Els.prototype.get = async function(url, dataTypeAnswer = 'json') {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch: ${url}, status: ${response.status}`);
    }

    switch(dataTypeAnswer) {
        case 'json': 
            return await response.json();
        case 'text':
            return await response.text();
        case 'blob':
            return await response.blob();
    }
}