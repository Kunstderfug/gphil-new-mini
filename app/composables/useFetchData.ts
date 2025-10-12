export const useFetchData = async (query: string, lazy: boolean = false) => {
  let data = null

  try {
    const { data: response } = lazy ? await useLazySanityQuery(query) : await useSanityQuery(query)
    data = response
    // return data
  } catch (error) {
    throw createError({
      message: 'Error fetching data'
    })
  }
  return data
}
