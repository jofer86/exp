import prisma from "../db"

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true
    }
  });

  console.log(user);


  res.json({
    data: user.products
  })
}

export const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findFirst({
    where: { 
      belongsTo: {
        id: req.user.id,
      },
      id
    }
  })
  res.json({ data: product });
};

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsTo: {
        connect: {
          id: req.user.id
        }
      }
    }
  })

  res.json({ data: product });
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: req.body.name,
      belongsToId: req.user.id
    }
  });

  res.json({ data: product });
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await prisma.product.delete({
    where: { 
      belongsToId: req.user.id,
      id,
    }
  });

  res.json({ data: deleted });
}