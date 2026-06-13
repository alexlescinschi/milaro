import ProductDetail from '@/components/catalog/ProductDetail'

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const catName = category.charAt(0).toUpperCase() + category.slice(1)
  return <ProductDetail category={category} slug={slug} catName={catName} />
}
