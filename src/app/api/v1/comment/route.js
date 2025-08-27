import prisma from '@/src/libs/prisma';

export async function POST(request) {
  const { anime_mal_id, user_email, comment, username, anime_title } = await request.json();
  const data = { anime_mal_id, user_email, comment, username, anime_title };

  const createComment = await prisma.comment.create({ data });
  if (!createComment) return Response.json({ message: 'gagal menambahakan komentar', isCreated: false }, { status: 401 });
  else return Response.json({ message: 'Berhasil menambahakan komentar', isCreated: true }, { status: 200 });
}
