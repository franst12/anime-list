import prisma from '@/src/libs/prisma';

export async function POST(request) {
  const { anime_mal_id, user_email, images, title } = await request.json();
  const data = { anime_mal_id, user_email, images, title };

  const createCollection = await prisma.collection.create({ data });
  if (!createCollection) return Response.json({ message: 'Gagal menambahkan ke koleksi', isCreated: false }, { status: 500 });
  else return Response.json({ message: 'Berhasil menambahkan ke koleksi', isCreated: true }, { status: 200 });
}
