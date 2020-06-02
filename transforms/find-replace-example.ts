import { Transform } from "jscodeshift";

const transform: Transform = function (fileInfo, api) {
  // console.log(fileInfo.path);
  const tree = api
    .jscodeshift(fileInfo.source)
    .findVariableDeclarators("addonId")
    // .forEach((path) => {
    //   api.stats("reviewer_count");
    // });
    .renameTo("addonIdWOW")
    .toSource();

  return tree;
  // return null;
};

export default transform;
