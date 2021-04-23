const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve('src/templates/tag-template.js')

  const result = await graphql(`
    query getRecipes {
      recipes: allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.recipes.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      createPage({
        path: `/${tag}`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      })
    })
  })
}
