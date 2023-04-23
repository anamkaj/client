type Cat = {
  id: number
  name: string
  slug: string
  parentCategoryId: number
}

export const catCrams = (category: Cat[], id: number | undefined) => {
  const linkCrumb: Cat[] = []
  let count = 0
  const searchParent = (id: number) => {
    for (let x = 0; category.length > x; x++) {
      if (id == category[x].id) {
        linkCrumb.push({
          id: category[x].id,
          name: category[x].name,
          slug: category[x].slug,
          parentCategoryId: category[x].parentCategoryId,
        })
        searchParent(category[x].parentCategoryId)
      }
    }
  }

  for (let i = 0; category.length > i; i++) {
    if (category[i].id == id) {
      searchParent(category[i].parentCategoryId)
      count = category[i].id
      linkCrumb.push({
        id: category[i].id,
        name: category[i].name,
        slug: category[i].slug,
        parentCategoryId: category[i].parentCategoryId,
      })
    }
  }
  return linkCrumb
}
