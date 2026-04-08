import { revalidateProductPath } from "./action";

export async function generateStaticParams() {
  const products = ['product-1', 'product-2', 'product-3'];

  return products.map((product) => ({
    slug: product
  }))
}

const ProductPage = async ({ params }) => {
  const { slug } = await params;
  const timestamp = new Date().toISOString();

  return (
    <div>
      <h2>Trang san pham: {slug}</h2>
      <p>THoi gian tao/cap nhat trang: {timestamp}</p>
      <p>
        Trang nay duoc ao tinh bang generateStaticParams, ban co the xoa cached
      </p>
      <form action={revalidateProductPath}>
        <input type="hidden" name="path" value={`/products/${slug}`}/>
        <button type="submit">Xoa cached trang {slug}</button>
      </form>
    </div>
  )
}

export default ProductPage;