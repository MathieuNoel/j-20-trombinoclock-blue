const promos = require("../../data/promos.json");

const promoController = {
  // je peux mettre un _ "underscore" sur un parametre que je ne vais pas utiliser

  promosList: (_, res) => {
    res.render("promos", { promos });
  },

  promoDetail: (req, res, next) => {
    // mode parsint
    // const id = parseInt(req.params.id, 10);
    // version Number
    const id = Number(req.params.id);

    // let promo;
    // for (const currentPromo of promos) {
    //   if (currentPromo.id === id) {
    //     selectedPromo = promo;
    //     // pour arreter ma boucle
    //     break;
    //   }
    // };

    // version one liner Une ligne
    const promo = promos.find((promotion) => promotion.id === id);

    // premiere facon avec un if else
    // if (promo) {
    //   res.render("promo", { promo });
    // } else {
    //   next();
    // }

    if (!promo) {
      return next();
    }

    res.render("promo", { promo });

    // meme chose avec un retour implicite
    // promo = promos.find((candidat) => {
    //   return candidat.id === id
    // })
  },
};

module.exports = promoController;
