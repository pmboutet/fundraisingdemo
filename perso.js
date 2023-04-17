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


var data_combat_migrations = {
    img_hero: "https://ccfd-terresolidaire.org/wp-content/uploads/2021/11/095_VAR2021011G0603-6534-scaled-e1641488363935-768x574.jpg",
    img_action: "https://ccfd-terresolidaire.org/wp-content/uploads/2021/12/Capture-d%C3%A9cran-2021-12-15-%C3%A0-16.35.04-e1639583893196.png",
    page_titre: {
        "tu": "Salut " + profil.prenom,
        "vous": "Chère Madame, Cher Monsieur"
    },
    page_titre_ornage: {
        "tu": "Merci de ton engagement !<br/> Luttons pour des politiques migratoires plus jutes !",
        "vous": "Nous vous remerçions de votre engagement en faveur d'une politiques migratoires plus justes"
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
        "tu": "Signe la pétition pour soutenir une politique migratoire plus juste",
        "vous": "Signez la pétition pour soutenir une politique migratoire plus juste"
    },
    page_petition_txt: {
        "tu" : "<p>On demande l'interdiction immédiate du commerce des produits issus des colonies israéliennes illégales en Cisjordanie occupée. Ce commerce soutient l'expansion illégale des colonies et va à l'encontre des valeurs de justice et de solidarité. On appelle le gouvernement français et l'Union européenne à prendre des mesures concrètes pour mettre fin à ce commerce illégal et pour promouvoir la paix au Moyen-Orient.</p><p>En signant cette pétition, tu montres ton soutien à cette cause importante. Tu peux faire la différence en demandant à nos dirigeants de prendre des mesures concrètes pour mettre fin à cette injustice. Signe maintenant pour exiger l'interdiction du commerce des produits des colonies israéliennes et pour soutenir la paix et la justice pour tous.</p>",
        "vous": "Nous sommes préoccupés par la situation difficile des migrants dans le monde entier. Nous devons soutenir le travail important du Comité Catholique contre la Faim et pour le Développement (CCFD) - Terre Solidaire pour défendre leurs droits et leur offrir une aide humanitaire.\n\nSi vous aussi, vous pensez que les gouvernements doivent respecter les droits des migrants, mettre fin aux politiques de détention et de déportation arbitraires et garantir leur sécurité et leur bien-être, alors rejoignez-nous en signant cette pétition. Nous exhortons également les donateurs à soutenir financièrement les projets de développement de CCFD-Terre Solidaire pour améliorer les conditions de vie des migrants et leur permettre de vivre dignement.\n\nChaque personne a le droit de vivre dans la dignité et la sécurité, quelles que soient ses origines et sa nationalité. Nous devons donc travailler ensemble pour protéger les droits des migrants et mettre fin à leur souffrance.\n\nSignez cette pétition pour exprimer votre solidarité envers les migrants et soutenir les actions de CCFD-Terre Solidaire.\n\nMerci d'avance pour votre soutien."

    },
    page_don_titre: {
        "tu": "Contribue à la cause en faisant un don pour soutenir une politique migratoire plus juste",
        "vous": "Donnez pour une politique migratoire plus juste"
    },
    page_don_txt: {
     "tu": "Aide les migrants à vivre dignement. Fais un don pour soutenir les projets de CCFD-Terre Solidaire dès maintenant. Ton don garantira leur sécurité, leur bien-être et leur liberté. Chaque personne a le droit de vivre dans la dignité et la sécurité, quelles que soient ses origines et sa nationalité. Fais un geste aujourd'hui pour protéger les droits des migrants et mettre fin à leur souffrance.\n\n",
     "vous": "Aidez les migrants à vivre dignement. Faites un don pour soutenir les projets de CCFD-Terre Solidaire dès maintenant. Votre don garantira leur sécurité, leur bien-être et leur liberté. Chaque personne a le droit de vivre dans la dignité et la sécurité, quelles que soient ses origines et sa nationalité. Faites un geste aujourd'hui pour protéger les droits des migrants et mettre fin à leur souffrance.\n\n"
    },
    page_contact_bloc: {
        "vous": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Vous souhaitez vous engager pour la justice migratoire ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et actions pour soutenir les projets d\'accueil et d\'intégration des migrants.</p>' +
            '<p class="card-text">N\'hésitez pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire et son engagement en faveur des droits des migrants.</p>',
        "tu": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
            '<p class="card-text">Tu souhaites t\'engager pour la justice migratoire ? Rejoins le CCFD-Terre Solidaire en devenant bénévole ! Tu pourras participer à des événements et actions pour soutenir les projets d\'accueil et d\'intégration des migrants.</p>' +
            '<p class="card-text">N\'hésite pas à contacter Erica Baggi pour toutes questions ou informations concernant le CCFD-Terre Solidaire et son engagement en faveur des droits des migrants.</p>'
    },
    page_contact_contact: {
        "tu": "",
        "vous": ""
    },
};

var data_combat_alimentaire = {
    img_hero: "https://ccfd-terresolidaire.org/wp-content/uploads/2022/07/Reportage-Roberta-Valerio-Mauritanie-74-768x512.jpg",
    img_action: "https://ccfd-terresolidaire.org/wp-content/uploads/2021/11/Reportage-LA-VIE_CCFD-Mali-2016-008-scaled.jpg",
    page_titre: {
        "tu": "Salut " + profil.prenom,
        "vous": "Chère Madame, Cher Monsieur"
    },
    page_titre_ornage: {
        "tu": "Soutiens la souveraineté alimentaire en faisant un don !",
        "vous": "Soutenez la souveraineté alimentaire en faisant un don !"      
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
        "tu": "Agis pour la souveraineté alimentaire en signant la pétition !",
        "vous": "Agissez pour la souveraineté alimentaire en signant la pétition !"
    },
    page_petition_txt: {
        "tu": "Signe maintenant notre pétition pour demander des politiques publiques qui soutiennent la souveraineté alimentaire. Ensemble, exigeons que les gouvernements prennent des mesures pour permettre aux paysans et aux populations locales de produire une nourriture saine et accessible à tous, tout en préservant l'environnement. Mobilisons-nous pour défendre le droit à une alimentation de qualité pour tous !",
        "vous": "Signez maintenant notre pétition pour demander des politiques publiques qui soutiennent la souveraineté alimentaire. Ensemble, exigeons que les gouvernements prennent des mesures pour permettre aux paysans et aux populations locales de produire une nourriture saine et accessible à tous, tout en préservant l'environnement. Mobilisons-nous pour défendre le droit à une alimentation de qualité pour tous !"
    },
    page_don_titre: {
        "tu": "Soutiens la souveraineté alimentaire en faisant un don !",
        "vous": "Soutenez la souveraineté alimentaire en faisant un don !"
    },
    page_don_txt: {
        "tu": "Fais un don dès maintenant pour soutenir les projets de CCFD-Terre Solidaire en faveur de la souveraineté alimentaire. Ton soutien permettra aux paysans et aux populations locales de produire une nourriture saine et accessible à tous, tout en préservant l'environnement. Ensemble, défendons le droit à une alimentation de qualité pour tous !",
        "vous": "Faites un don dès maintenant pour soutenir les projets de CCFD-Terre Solidaire en faveur de la souveraineté alimentaire. Votre soutien permettra aux paysans et aux populations locales de produire une nourriture saine et accessible à tous, tout en préservant l'environnement. Ensemble, défendons le droit à une alimentation de qualité pour tous !"
    },
    page_contact_bloc: {
        "tu": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
                '<p class="card-text">Vous souhaitez vous engager pour la souveraineté alimentaire et la justice climatique ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et des actions pour faire connaître nos actions et récolter des fonds.</p>' +
                '<p class="card-text">N\'hésitez pas à contacter Anne-Sophie Ledoux pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>',
        "vous": '<h5 class="card-title heading-primary blue">Devenir <span class="whiteOrange">bénévole</span></h5>' +
                '<p class="card-text">Vous souhaitez vous engager pour la souveraineté alimentaire et la justice climatique ? Rejoignez le CCFD-Terre Solidaire en devenant bénévole ! Vous pourrez participer à des événements et des actions pour faire connaître nos actions et récolter des fonds.</p>' +
                '<p class="card-text">N\'hésitez pas à contacter Anne-Sophie Ledoux pour toutes questions ou informations concernant le CCFD-Terre Solidaire à Paris.</p>'
 },
    page_contact_contact: {
        "tu": "",
        "vous": ""
    },
};