const path = require('path')
const slugify = require('slugify')

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
      const slugTag = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${slugTag}`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      })
    })
  })
}
