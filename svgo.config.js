module.exports = {
    multipass: true, // Enable multipass for better optimization
    js2svg: {
      indent: 0, // Minify SVG output by removing indentations
      pretty: false, // Minify SVG output by removing prettification
    },
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupAttrs: true, // Clean up attributes
            removeDoctype: true, // Remove doctype declaration
            removeXMLProcInst: true, // Remove XML processing instructions
            removeComments: true, // Remove comments
            removeMetadata: true, // Remove metadata
            removeTitle: true, // Remove <title> tag
            removeDesc: {
              removeAny: true, // Remove all <desc> tags
            },
            removeUselessDefs: true, // Remove elements that are not rendered directly
            removeEditorsNSData: true, // Remove editor namespaces, elements, and attributes
            removeEmptyAttrs: true, // Remove empty attributes
            removeHiddenElems: true, // Remove hidden elements
            removeEmptyText: true, // Remove empty Text elements
            convertShapeToPath: true, // Convert shapes to more compact path elements
            moveElemsAttrsToGroup: true, // Move elements attributes to the enclosing group
            moveGroupAttrsToElems: true, // Move some group attributes to the children elements
            collapseGroups: true, // Collapse useless groups
            removeUnusedNS: true, // Remove unused namespaces declaration
            sortAttrs: true, // Sort element attributes for better compression
            removeDimensions: true, // Remove width/height and add viewBox if it doesn't exist
            removeStyleElement: true, // Remove <style> elements
            removeScriptElement: true, // Remove <script> elements
            removeUnknownsAndDefaults: {
              keepDataAttrs: false, // Remove unknowns and defaults, including data-* attributes
            },
            cleanupIDs: {
              remove: true, // Remove IDs
              minify: true, // Minify IDs
              prefix: {
                toString() {
                  return Math.random().toString(36).substr(2, 9); // Generate unique IDs
                },
              },
            },
            convertTransform: true, // Collapse multiple transformations into one
            convertEllipseToCircle: true, // Convert non-optimal <ellipse> to <circle> elements
            convertPathData: {
              noSpaceAfterFlags: false, // Add no space after flags (will decrease file size)
              makeArcs: {
                threshold: 2.5, // Convert splines to arcs if it saves space
                tolerance: 0.5, // Maximum error of path approximation
              },
            },
            mergePaths: true, // Merge multiple paths into one if possible
            removeUnusedNS: true, // Remove unused namespaces
            minifyStyles: true, // Minify <style> elements content with CSSO
            cleanupNumericValues: {
              floatPrecision: 2, // Reduce precision of floating point numbers
            },
          },
        },
      },
    ],
  };
  