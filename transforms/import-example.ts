import j from "jscodeshift";
import { Transform } from "jscodeshift";

const transform: Transform = function (fileInfo, api) {
  // console.log(fileInfo.path);
  const root = api.jscodeshift(fileInfo.source);

  const paths = root.findVariableDeclarators("addonId");
  if (paths.length) {
    const FIRST_IMPORT = root.find(j.ImportDeclaration).at(0);

    FIRST_IMPORT.insertAfter(
      j.importDeclaration(
        [j.importSpecifier(j.identifier("thing"))],
        j.stringLiteral("some-package"),
        "value"
      )
    );
    return root.toSource();
  }

  return null;
};

export default transform;
