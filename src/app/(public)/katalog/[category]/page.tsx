import { redirect } from 'next/navigation'

const CAT_MAP: Record<string, string> = {
  kuechen: 'kuechen',
  schraenke: 'schraenke',
  baeder: 'baeder',
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = CAT_MAP[category]
  if (cat) redirect(`/katalog?cat=${cat}`)
  redirect('/katalog')
}