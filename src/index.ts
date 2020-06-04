import * as express from "express";
import { getAmount } from "./mon-compte-formation";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/mon-compte-formation", async (req, res) => {
  const { numeroFiscal, motDePasse } = req.query;

  try {
    const amount = await getAmount(
      numeroFiscal as string,
      motDePasse as string
    );
    res.json({
      solde: amount,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
