let profil = {
    'combat': 'justice_eco', //justice_eco, migrations_inter, ...
    'profil': 'militant',  // donateur, militant 
    'calendrier': 'calendrier_catho', //
    'temps': 'unemn', //
    'style': 'vous',
    'prenom': 'Pierre-Marie',
    'nom': 'Boutet',
    'email': 'xxx@salesforce.com',
    'tel': '00XXX0X0S0S0',
    'civilite': 'monsieur'
}

var data_combat_justice = {
    img_hero: "https://ccfd-terresolidaire.org/wp-content/uploads/2021/11/Reportage-PELERIN_CCFD-Inde-2016-023-1536x1025.jpg",
    img_action: "https://ccfd-terresolidaire.org/wp-content/uploads/2022/01/Sans-titre-1-1536x864.png",
    page_titre: {
        "tu": "Salut " + profil.prenom,
        "vous": "Chère Madame, Cher Monsieur"
    },
    page_titre_ornage: {
        "tu": "Ensemble, Exigeons des politiques économiques, fiscales et réglementaires justes ",
        "vous": "Ensemble, Exigeons des politiques économiques, fiscales et réglementaires justes "
    },
    page_merci_txt: {
        "tu": "La page que tu vois a été générée (presque) intégralement avec ChatGPT et Salesforce Marketing Cloud en fonction de tes réponses à nos questions. Si t'as des questions ou des remarques, n'hésite pas à nous les faire savoir !",
        "vous": "La page que vous voyez a été générée (presque) intégralement avec ChatGPT et Salesforce Marketing Cloud en fonction de vos réponses à nos questions."
    },
    page_merci_vars: {
        "tu": "Tes réponses : ",
        "vous": "Vos réponses :"
    },
    page_petition_titre: {
        "tu": "Pour une économie plus juste et plus solidaire !",
        "vous": "Pour une économie plus juste et plus solidaire !"
    },
    page_petition_txt: {
        "tu": "Ensemble, demandons la mise en place de politiques économiques justes, d'un système fiscal équitable, et d'une réglementation stricte des entreprises transnationales pour construire un monde plus durable et plus équitable pour tous ! Rejoins-nous en signant cette pétition. Ensemble, nous pouvons faire pression sur les décideurs politiques et économiques pour qu'ils prennent des mesures concrètes en faveur de la justice économique. Signe maintenant pour rejoindre notre mouvement !",
        "vous": "Nous demandons la mise en place de politiques économiques justes, d'un système fiscal équitable, et d'une réglementation stricte des entreprises transnationales. Rejoignez-nous en signant cette pétition pour construire un monde plus durable et plus équitable pour tous ! Ensemble, nous pouvons faire pression sur les décideurs politiques et économiques pour qu'ils prennent des mesures concrètes en faveur de la justice économique. Signez maintenant pour rejoindre notre mouvement !."
    },
    page_don_titre: {
        "tu": "Soutiens la justice économique en faisant un don !",
        "vous": "Soutenez la justice économique en faisant un don !"
    },
    page_don_txt: {
        "tu": "Tu peux contribuer à la construction d'un monde plus juste et plus solidaire en faisant un don à CCFD-Terre Solidaire. Nous agissons pour la mise en place de politiques économiques justes, d'un système fiscal équitable, et d'une réglementation stricte des entreprises transnationales pour lutter contre les inégalités et la pauvreté dans le monde. Avec ton don, nous pourrons financer des projets de développement durable et soutenir des actions de plaidoyer pour la justice économique. Soutiens-nous dans notre combat pour un monde plus équitable pour tous en faisant un don dès maintenant !",
        "vous": "Vous pouvez contribuer à la construction d'un monde plus juste et plus solidaire en faisant un don à CCFD-Terre Solidaire. Nous agissons pour la mise en place de politiques économiques justes, d'un système fiscal équitable, et d'une réglementation stricte des entreprises transnationales pour lutter contre les inégalités et la pauvreté dans le monde. Avec votre don, nous pourrons financer des projets de développement durable et soutenir des actions de plaidoyer pour la justice économique. Soutenez-nous dans notre combat pour un monde plus équitable pour tous en faisant un don dès maintenant !"
    },
    page_contact_bloc: {
        "vous": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Vous souhaitez vous engager pour la solidarité internationale ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et actions pour faire connaître nos actions et récolter des fonds.</p>' +
            '<p class="card-text">N\'hésitez pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>',
        "tu": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Vous souhaitez vous engager pour la solidarité internationale ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et actions pour faire connaître nos actions et récolter des fonds.</p>' +
            '<p class="card-text">N\'hésitez pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>'
    },
    page_contact_contact: {
        "tu": "",
        "vous": ""
    },
};

var data_combat_paix = {
    img_hero: "https://ccfd-terresolidaire.org/wp-content/uploads/2022/03/Voyage-dimmersion-du-RT-Israel-Palestine-2014-025-768x432.jpg",
    img_action: "https://ccfd-terresolidaire.org/wp-content/uploads/2016/10/bts_-_hebron_1_web.jpg",
    page_titre: {
        "tu": "Salut " + profil.prenom,
        "vous": "Chère Madame, Cher Monsieur"
    },
    page_titre_ornage: {
        "tu": "Merci de ton engagemnet à nos côtés",
        "vous": "Nous sommes très heureux de vous compter parmis nous"
    },
    page_merci_txt: {
        "tu": "La page que tu vois a été générée (presque) intégralement avec ChatGPT et Salesforce Marketing Cloud en fonction de tes réponses à nos questions. Si t'as des questions ou des remarques, n'hésite pas à nous les faire savoir !",
        "vous": "La page que vous voyez a été générée (presque) intégralement avec ChatGPT et Salesforce Marketing Cloud en fonction de vos réponses à nos questions."
    },
    page_merci_vars: {
        "tu": "Tes réponses : ",
        "vous": "Vos réponses :"
    },
    page_petition_titre: {
        "tu": "Interdisez le commerce des produits des colonies israéliennes",
        "vous": "Interdisez le commerce des produits des colonies israéliennes"
    },
    page_petition_txt: {
        "tu" : "<p>On demande l'interdiction immédiate du commerce des produits issus des colonies israéliennes illégales en Cisjordanie occupée. Ce commerce soutient l'expansion illégale des colonies et va à l'encontre des valeurs de justice et de solidarité. On appelle le gouvernement français et l'Union européenne à prendre des mesures concrètes pour mettre fin à ce commerce illégal et pour promouvoir la paix au Moyen-Orient.</p><p>En signant cette pétition, tu montres ton soutien à cette cause importante. Tu peux faire la différence en demandant à nos dirigeants de prendre des mesures concrètes pour mettre fin à cette injustice. Signe maintenant pour exiger l'interdiction du commerce des produits des colonies israéliennes et pour soutenir la paix et la justice pour tous.</p>",
        "vous": "<p>Nous demandons l'interdiction immédiate du commerce des produits issus des colonies israéliennes illégales en Cisjordanie occupée. Ce commerce soutient l'expansion illégale des colonies et va à l'encontre des valeurs de justice et de solidarité. Nous appelons le gouvernement français et l'Union européenne à prendre des mesures concrètes pour mettre fin à ce commerce illégal et pour promouvoir la paix au Moyen-Orient.</p><p>En signant cette pétition, vous montrez votre soutien à cette cause importante. Vous pouvez faire la différence en demandant à nos dirigeants de prendre des mesures concrètes pour mettre fin à cette injustice. Signez maintenant pour exiger l'interdiction du commerce des produits des colonies israéliennes et pour soutenir la paix et la justice pour tous.</p>",

    },
    page_don_titre: {
        "tu": "Soutiens la justice économique en faisant un don !",
        "vous": "Soutenez la justice économique en faisant un don !"
    },
    page_don_txt: {
        "tu": "<p>Ton don peut faire la différence !</p><p>En donnant, tu soutiens notre lutte pour l'interdiction du commerce des produits issus des colonies israéliennes illégales en Cisjordanie occupée. Ce commerce soutient l'expansion illégale des colonies et va à l'encontre des valeurs de justice et de solidarité. Nous appelons le gouvernement français et l'Union européenne à prendre des mesures concrètes pour mettre fin à ce commerce illégal et pour promouvoir la paix au Moyen-Orient.</p><p>En faisant un don, tu peux aider à financer nos actions pour mettre fin à cette injustice. Donne maintenant pour exiger l'interdiction du commerce des produits des colonies israéliennes et pour soutenir la paix et la justice pour tous.</p>",
          "vous": "<p>Votre don peut faire la différence !</p><p>En donnant, vous soutenez notre lutte pour l'interdiction du commerce des produits issus des colonies israéliennes illégales en Cisjordanie occupée. Ce commerce soutient l'expansion illégale des colonies et va à l'encontre des valeurs de justice et de solidarité. Nous appelons le gouvernement français et l'Union européenne à prendre des mesures concrètes pour mettre fin à ce commerce illégal et pour promouvoir la paix au Moyen-Orient.</p><p>En faisant un don, vous pouvez aider à financer nos actions pour mettre fin à cette injustice. Donnez maintenant pour exiger l'interdiction du commerce des produits des colonies israéliennes et pour soutenir la paix et la justice pour tous.</p>"
},
    page_contact_bloc: {
        "vous": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Vous souhaitez vous engager pour la solidarité internationale ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et actions pour faire connaître nos actions et récolter des fonds.</p>' +
            '<p class="card-text">N\'hésitez pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>',
        "tu": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Vous souhaitez vous engager pour la solidarité internationale ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et actions pour faire connaître nos actions et récolter des fonds.</p>' +
            '<p class="card-text">N\'hésitez pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>'
    },
    page_contact_contact: {
        "tu": "",
        "vous": ""
    },
};
