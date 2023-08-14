import express from "express";
import Item from "../models/item";
import itensRepository from '../repositories/itens-repository';

const itensRouter = express.Router();

itensRouter.post("/itens", (req, res) => {
  const item: Item = req.body;

  itensRepository.criar(item, (id) => {
    if (id) {
        res.status(201).location(`/itens/${id}`).send()
    } else {
        res.status(400).send()
    }
  });
});

itensRouter.get("/itens", (req, res) => {
  const itens: Item[] = [
    {
      id: 1,
      nome: "Item 1",
      descricao: "Descrição do item 1",
    },
    {
      id: 2,
      nome: "Item 2",
      descricao: "Descrição do item 2",
    },
  ];

  res.json(itens);
});

itensRouter.get("/itens/:id", (req, res) => {
  const id: number = +req.params.id;
  const item: Item = {
    id: id,
    nome: `Item ${id}`,
    descricao: `Descrição do item ${id}`,
  };

  res.json(item);
});

itensRouter.put("/itens/:id", (req, res) => {
  const id: number = +req.params.id;
  res.status(204).send();
});

itensRouter.delete("/itens/:id", (req, res) => {
    const id: number = +req.params.id;
    res.status(204).send();
});

export default itensRouter;
