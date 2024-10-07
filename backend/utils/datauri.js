import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    // console.log('file:', file);
    // console.log('file.originalname:', file.originalname);
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;