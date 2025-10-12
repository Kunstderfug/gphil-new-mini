export const supabaseUrl = 'https://gprktgiajxiwjzjsqdly.supabase.co/storage/v1/object/public/'

export const libraryURI = () => {
  const query = '*[_type == "score" && private != true && complete>0] | order(title asc)'
  const params = `{_id,_updatedAt,_rev,composer,instrument,key,pathName,private,ready,complete,shortTitle,'slug': slug.current, layers}`

  return `${query}${params}`
}

export const scoresInPlanURI = () => {
  const query = '*[_type == "score" && complete==0] | order(completion_year asc)'
  const params = ``
  return `${query}${params}`
}

export const scoreURI = (slug: string) => {
  const query = `*[_type == 'score' && slug.current == '${slug}']`
  const params = `{_id,_updatedAt,_rev,composer,instrument,price_id,price,key,about,movements,pathName,ready,shortTitle,tips,audio_format,'slug': slug.current,title,
  'full_score_url':full_score_download.asset->url,
  'piano_score_url':piano_score_download.asset->url,
  layers}`
  return `${query}${params}`
}

export const changesURI = `*[_type == "change"] | order(date desc)`

export const articlesURI = '*[_type == "article"] | order(order asc)'

export const subscriptionsURI = () => {
  const ids = [
    '621ffdcd-df4d-4876-bdf3-dfd53eead976',
    '587343e3-3f52-4d2e-a81f-2993710358f6',
    '158a8ad1-9021-4c32-b2e4-89ad5ed43c33'
  ]

  return `*[_type=="subscription"] | order(price, ASC)&$ids=${JSON.stringify(ids)}`
}
