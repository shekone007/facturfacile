/* =====================================================
   FacturFacile – logique de l'application
   Trilingue : FR / EN / ES
   ===================================================== */

// ---------- Dictionnaires de traduction ----------
window.I18N = {
  fr: {
    'nav.pro': 'Passer à PRO',
    'nav.features': 'Fonctionnalités', 'nav.pricing': 'Tarifs', 'nav.faq': 'FAQ',
    'hero.badge': '✨ 100 % gratuit · aucune inscription',
    'hero.title': 'Facturez comme un pro,<br>en moins de 2 minutes.',
    'hero.sub': 'Créez des factures et devis professionnels, téléchargez-les en PDF et envoyez-les à vos clients. Sans compte, sans limite.',
    'hero.cta1': 'Créer ma facture — Gratuit', 'hero.cta2': 'Voir comment ça marche',
    'trust.s1': '🇲🇦 Conçu pour le Maroc', 'trust.s2': '🔒 100 % privé', 'trust.s3': '⚡ Instantané',
    'stat.1': 'pour toujours', 'stat.2': 'pour une facture', 'stat.3': 'dans votre navigateur', 'stat.4': 'TVA Maroc réglée',
    'mini.ttc': 'Total TTC',
    'feat.title': "Tout ce qu'il faut pour facturer sans stress",
    'feat.sub': 'Un outil pensé pour les freelances, artisans et TPE/PME marocains.',
    'feat.1.t': 'Factures & devis', 'feat.1.d': "Passez d'un devis à une facture en 1 clic, avec numérotation automatique.",
    'feat.2.t': 'Export PDF', 'feat.2.d': 'Impression A4 impeccable ou enregistrement direct en PDF.',
    'feat.3.t': 'TVA Maroc incluse', 'feat.3.d': '20 %, 14 %, 10 %, 7 % ou exonéré : les calculs sont automatiques.',
    'feat.4.t': '3 devises', 'feat.4.d': "Dirham, Euro ou Dollar — parfait pour vos clients à l'étranger.",
    'feat.5.t': '100 % privé', 'feat.5.d': "Aucune donnée n'est envoyée sur Internet. Tout reste sur votre appareil.",
    'feat.6.t': 'Trilingue', 'feat.6.d': 'Français, Anglais, Espagnol pour facturer partout dans le monde.',
    'app.title': 'Créez votre document',
    'srv.tag': '🧑‍💼 Service de facturation',
    'srv.title': "Pas le temps de faire votre facture ? On s'en occupe.",
    'srv.sub': 'Envoyez-nous vos informations sur WhatsApp. Nous vous renvoyons une facture ou un devis professionnel en PDF, prêt à envoyer à votre client — en moins de 5 minutes.',
    'srv.l1': '✅ TVA marocaine incluse (20 / 14 / 10 %)',
    'srv.l2': '✅ PDF propre et professionnel',
    'srv.l3': '✅ Paiement par virement, Cashplus ou Wafacash',
    'srv.from': 'À partir de', 'srv.per': '/ document · Pack 5 : 200 DH',
    'srv.cta': 'Commander sur WhatsApp',
    'srv.s1': 'par facture', 'srv.s2': 'tarif simple', 'srv.s3': 'conforme Maroc',
    'price.title': 'Un prix simple et honnête',
    'price.sub': 'Commencez gratuitement. Passez au PRO quand vous êtes prêt. Paiement et encaissement 100 % au Maroc 🇲🇦',
    'price.free.note': 'Pour toujours', 'price.pro.note': 'ou 490 DH/an (2 mois offerts)', 'price.ent.note': 'Pour les équipes',
    'price.f4': 'TVA Maroc 20/14/10/7/0 %', 'price.p5': 'Support prioritaire WhatsApp',
    'price.b3': 'Factures récurrentes', 'price.b4': 'Formation offerte',
    'test.title': 'Ils facturent déjà avec FacturFacile',
    'test.1': "« J'ai créé ma première facture en 3 minutes. Simple et pro, exactement ce qu'il faut. »",
    'test.1r': 'Développeur freelance, Casablanca',
    'test.2': "« La TVA marocaine est déjà gérée, je n'ai plus à calculer à la main. Un vrai gain de temps. »",
    'test.2r': 'Graphiste, Rabat',
    'test.3': "« Mes clients à l'étranger paient en euros, et je peux facturer en 3 langues. Parfait. »",
    'test.3r': 'Consultant, Marrakech',
    'faq.title': 'Questions fréquentes',
    'faq.q1': 'Est-ce vraiment gratuit ?',
    'faq.a1': 'Oui. Le plan Gratuit est illimité et sans inscription. Vous ne payez que si vous voulez les options PRO.',
    'faq.q2': 'Mes données sont-elles en sécurité ?',
    'faq.a2': "Absolument. Tout est calculé dans votre navigateur : aucune donnée n'est envoyée sur Internet.",
    'faq.q3': 'La TVA marocaine est-elle gérée ?',
    'faq.a3': "Oui, les taux 20 %, 14 %, 10 %, 7 % et l'exonération 0 % (export) sont pris en charge automatiquement.",
    'faq.q4': "Comment payer l'abonnement PRO depuis le Maroc ?",
    'faq.a4': 'Par virement BMCE, Cashplus ou Wafacash pour les clients locaux, et par Payoneer pour l\'international.',
    'faq.q5': "Puis-je facturer des clients à l'étranger ?",
    'faq.a5': 'Oui : choisissez la devise € ou $, la TVA 0 % (exonération export) et la langue de votre client.',
    'cta.title': 'Prêt à créer votre première facture ?',
    'cta.sub': 'Gratuit, sans inscription, en 2 minutes.',
    'cta.btn': 'Créer ma facture maintenant',
    'footer.about': 'Le générateur de factures et devis le plus simple pour les freelances et TPE/PME au Maroc et dans le monde.',
    'footer.nav': 'Navigation', 'footer.contact': 'Contact', 'footer.partners': 'Partenaires',
    'footer.rights': 'Tous droits réservés', 'footer.made': 'Fait au Maroc',
    'type.devis': 'Devis', 'type.facture': 'Facture',
    'title.devis': 'DEVIS', 'title.facture': 'FACTURE',
    'doc.you': 'Votre entreprise / nom', 'doc.client': 'Client',
    'doc.num': 'N°', 'doc.date': 'Date', 'doc.notes': 'Conditions / notes',
    'col.desc': 'Désignation', 'col.qty': 'Qté', 'col.pu': 'P.U. HT',
    'col.tva': 'TVA %', 'col.total': 'Total HT',
    'lines.add': '+ Ajouter une ligne',
    'tot.ht': 'Total HT', 'tot.ttc': 'Total TTC',
    'act.currency': 'Devise', 'act.print': '🖨️ Imprimer / Enregistrer en PDF',
    'act.tva': 'TVA',
    'tva.20': '20 % (taux normal)', 'tva.14': '14 % (taux intermédiaire)',
    'tva.10': '10 % (taux réduit)', 'tva.7': '7 % (taux réduit)',
    'tva.0': '0 % – Exonéré / hors Maroc',
    'act.save': '💾 Enregistrer', 'act.open': '📂 Ouvrir', 'act.reset': '♻️ Nouveau document',
    'price.title': 'Passez à la version PRO',
    'price.sub': 'Paiement international sécurisé – Payoneer, carte bancaire ou virement.',
    'price.free.name': 'Gratuit', 'price.free.btn': 'Utiliser gratuitement',
    'price.badge': 'POPULAIRE', 'price.month': '/mois',
    'price.f1': 'Devis & factures illimités', 'price.f2': 'Export PDF', 'price.f3': '3 devises (DH, €, $)',
    'price.p1': 'Logo & couleurs personnalisés', 'price.p2': 'Clients enregistrés',
    'price.p3': 'Export PDF en lot', 'price.p4': 'Support prioritaire',
    'price.pro.btn': "S'abonner",
    'price.b1': 'Tout le PRO', 'price.b2': 'Multi-utilisateurs (5)', 'price.b3': 'API & intégrations',
    'price.ent.btn': "Contacter l'équipe",
    'price.note': '💡 Depuis le Maroc : Payoneer · CIH Pay · Western Union · Virement international',
    'paySoon': 'Bientôt disponible ! Le paiement en ligne arrive très vite. Merci de votre soutien 🙏',
    'help.title': 'Comment ça marche ?',
    'help.s1': 'Remplissez vos informations et celles du client.',
    'help.s2': 'Ajoutez vos lignes (désignation, quantité, prix).',
    'help.s3': 'Cliquez sur « Imprimer », puis choisissez « Enregistrer en PDF ».',
    'help.s4': 'Envoyez le PDF à votre client. C’est prêt !',
    'help.info': 'ℹ️ Aucune donnée n’est envoyée sur Internet : tout est stocké dans votre navigateur.',
    'saved': '✅ Document enregistré dans votre navigateur.',
    'noSave': 'Aucun document sauvegardé.',
    'loaded': '📂 Document chargé.',
    'confirmNew': 'Créer un nouveau document ? Les modifications non enregistrées seront perdues.',
    'pay.title': 'Choisissez votre moyen de paiement',
    'pay.m1': 'Virement bancaire (Maroc)',
    'pay.m1d': 'Envoyez le montant sur le RIB suivant, puis envoyez la preuve :',
    'pay.copy': '📋 Copier le RIB',
    'pay.m2': 'Cashplus / Wafacash / Western Union',
    'pay.m2d': "Allez dans l'agence la plus proche, envoyez le montant, puis envoyez-nous le reçu (n° de transfert).",
    'pay.m3': 'Payoneer (pour les clients internationaux)',
    'pay.m3d': "Les clients hors Maroc paient par Payoneer – l'argent arrive sur votre compte Payoneer, retrait au Maroc.",
    'pay.m3b': 'Ouvrir un compte Payoneer',
    'pay.contact': '📩 Une fois le paiement effectué, envoyez la preuve :',
    'pay.mail': '✉️ E-mail',
    'pay.tip': '💡 Conservez toujours le reçu : il sert de facture.',
    'pay.copied': '✅ RIB copié !',
  },
  en: {
    'nav.pro': 'Go PRO',
    'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ',
    'hero.badge': '✨ 100% free · no sign-up',
    'hero.title': 'Invoice like a pro,<br>in under 2 minutes.',
    'hero.sub': 'Create professional invoices and quotes, download them as PDF and send them to your clients. No account, no limit.',
    'hero.cta1': 'Create my invoice — Free', 'hero.cta2': 'See how it works',
    'trust.s1': '🇲🇦 Built for Morocco', 'trust.s2': '🔒 100% private', 'trust.s3': '⚡ Instant',
    'stat.1': 'forever', 'stat.2': 'per invoice', 'stat.3': 'in your browser', 'stat.4': 'Morocco VAT ready',
    'mini.ttc': 'Total',
    'feat.title': 'Everything you need to invoice stress-free',
    'feat.sub': 'A tool made for freelancers, craftsmen and small businesses.',
    'feat.1.t': 'Invoices & quotes', 'feat.1.d': 'Turn a quote into an invoice in one click, with automatic numbering.',
    'feat.2.t': 'PDF export', 'feat.2.d': 'Perfect A4 printing or direct PDF saving.',
    'feat.3.t': 'Morocco VAT included', 'feat.3.d': '20%, 14%, 10%, 7% or exempt: calculations are automatic.',
    'feat.4.t': '3 currencies', 'feat.4.d': 'Dirham, Euro or Dollar — perfect for international clients.',
    'feat.5.t': '100% private', 'feat.5.d': 'No data is sent to the internet. Everything stays on your device.',
    'feat.6.t': 'Trilingual', 'feat.6.d': 'French, English, Spanish to invoice anywhere in the world.',
    'app.title': 'Create your document',
    'srv.tag': '🧑‍💼 Invoicing service',
    'srv.title': "No time to make your invoice? We'll do it for you.",
    'srv.sub': 'Send us your details on WhatsApp. We send back a professional PDF invoice or quote, ready for your client — in under 5 minutes.',
    'srv.l1': '✅ Morocco VAT included (20 / 14 / 10%)',
    'srv.l2': '✅ Clean, professional PDF',
    'srv.l3': '✅ Payment by transfer, Cashplus or Wafacash',
    'srv.from': 'From', 'srv.per': '/ document · Pack of 5: 200 DH',
    'srv.cta': 'Order on WhatsApp',
    'srv.s1': 'per invoice', 'srv.s2': 'simple pricing', 'srv.s3': 'Morocco compliant',
    'price.title': 'Simple, honest pricing',
    'price.sub': 'Start for free. Upgrade to PRO when ready. 100% Morocco-friendly payment 🇲🇦',
    'price.free.note': 'Forever', 'price.pro.note': 'or 490 DH/year (2 months free)', 'price.ent.note': 'For teams',
    'price.f4': 'Morocco VAT 20/14/10/7/0%', 'price.p5': 'Priority WhatsApp support',
    'price.b3': 'Recurring invoices', 'price.b4': 'Free onboarding',
    'test.title': 'They already invoice with FacturFacile',
    'test.1': '"I created my first invoice in 3 minutes. Simple and pro, exactly what I needed."',
    'test.1r': 'Freelance developer, Casablanca',
    'test.2': '"Morocco VAT is handled, I no longer calculate by hand. A real time saver."',
    'test.2r': 'Designer, Rabat',
    'test.3': '"My foreign clients pay in euros, and I can invoice in 3 languages. Perfect."',
    'test.3r': 'Consultant, Marrakech',
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is it really free?',
    'faq.a1': 'Yes. The Free plan is unlimited with no sign-up. You only pay if you want PRO features.',
    'faq.q2': 'Is my data safe?',
    'faq.a2': 'Absolutely. Everything is computed in your browser: no data is sent to the internet.',
    'faq.q3': 'Is Morocco VAT handled?',
    'faq.a3': 'Yes, 20%, 14%, 10%, 7% and the 0% export exemption are handled automatically.',
    'faq.q4': 'How can I pay for PRO from Morocco?',
    'faq.a4': 'Via BMCE bank transfer, Cashplus or Wafacash for local clients, and Payoneer for international.',
    'faq.q5': 'Can I invoice foreign clients?',
    'faq.a5': 'Yes: pick the € or $ currency, 0% VAT (export exemption) and your client’s language.',
    'cta.title': 'Ready to create your first invoice?',
    'cta.sub': 'Free, no sign-up, in 2 minutes.',
    'cta.btn': 'Create my invoice now',
    'footer.about': 'The simplest invoice and quote generator for freelancers and small businesses in Morocco and worldwide.',
    'footer.nav': 'Navigation', 'footer.contact': 'Contact', 'footer.partners': 'Partners',
    'footer.rights': 'All rights reserved', 'footer.made': 'Made in Morocco',
    'type.devis': 'Quote', 'type.facture': 'Invoice',
    'title.devis': 'QUOTE', 'title.facture': 'INVOICE',
    'doc.you': 'Your business / name', 'doc.client': 'Client',
    'doc.num': 'No.', 'doc.date': 'Date', 'doc.notes': 'Terms / notes',
    'col.desc': 'Description', 'col.qty': 'Qty', 'col.pu': 'Unit price',
    'col.tva': 'VAT %', 'col.total': 'Total (excl.)',
    'lines.add': '+ Add line',
    'tot.ht': 'Subtotal', 'tot.ttc': 'Grand total',
    'act.currency': 'Currency', 'act.print': '🖨️ Print / Save as PDF',
    'act.tva': 'VAT',
    'tva.20': '20 % (standard rate)', 'tva.14': '14 % (intermediate rate)',
    'tva.10': '10 % (reduced rate)', 'tva.7': '7 % (reduced rate)',
    'tva.0': '0 % – Exempt / outside Morocco',
    'act.save': '💾 Save', 'act.open': '📂 Open', 'act.reset': '♻️ New document',
    'price.title': 'Upgrade to PRO',
    'price.sub': 'Secure international payment – card, Payoneer or bank transfer.',
    'price.free.name': 'Free', 'price.free.btn': 'Start for free',
    'price.badge': 'POPULAR', 'price.month': '/month',
    'price.f1': 'Unlimited quotes & invoices', 'price.f2': 'PDF export', 'price.f3': '3 currencies (DH, €, $)',
    'price.p1': 'Custom logo & colors', 'price.p2': 'Saved clients',
    'price.p3': 'Bulk PDF export', 'price.p4': 'Priority support',
    'price.pro.btn': 'Subscribe',
    'price.b1': 'Everything in PRO', 'price.b2': 'Multi-user (5)', 'price.b3': 'API & integrations',
    'price.ent.btn': 'Contact us',
    'price.note': '💡 Payment options: credit card · Payoneer · bank transfer',
    'paySoon': 'Coming soon! Online payment is on the way. Thanks for your support 🙏',
    'help.title': 'How it works',
    'help.s1': 'Fill in your details and your client’s.',
    'help.s2': 'Add your lines (description, quantity, price).',
    'help.s3': 'Click “Print”, then choose “Save as PDF”.',
    'help.s4': 'Send the PDF to your client. Done!',
    'help.info': 'ℹ️ Nothing is sent to the internet: everything is stored in your browser.',
    'saved': '✅ Document saved in your browser.',
    'noSave': 'No saved document found.',
    'loaded': '📂 Document loaded.',
    'confirmNew': 'Create a new document? Unsaved changes will be lost.',
    'pay.title': 'Choose your payment method',
    'pay.m1': 'Bank transfer (Morocco)',
    'pay.m1d': 'Send the amount to the RIB below, then send the proof:',
    'pay.copy': '📋 Copy RIB',
    'pay.m2': 'Cashplus / Wafacash / Western Union',
    'pay.m2d': 'Go to the nearest agency, send the amount, then send us the receipt (transfer number).',
    'pay.m3': 'Payoneer (for international clients)',
    'pay.m3d': "Clients outside Morocco pay via Payoneer – money arrives on your Payoneer account, withdraw in Morocco.",
    'pay.m3b': 'Open a Payoneer account',
    'pay.contact': '📩 Once paid, send the proof:',
    'pay.mail': '✉️ E-mail',
    'pay.tip': '💡 Always keep the receipt: it serves as your invoice.',
    'pay.copied': '✅ RIB copied!',
  },
  es: {
    'nav.pro': 'Pasar a PRO',
    'nav.features': 'Funciones', 'nav.pricing': 'Precios', 'nav.faq': 'FAQ',
    'hero.badge': '✨ 100% gratis · sin registro',
    'hero.title': 'Factura como un pro,<br>en menos de 2 minutos.',
    'hero.sub': 'Crea facturas y presupuestos profesionales, descárgalos en PDF y envíalos a tus clientes. Sin cuenta, sin límites.',
    'hero.cta1': 'Crear mi factura — Gratis', 'hero.cta2': 'Ver cómo funciona',
    'trust.s1': '🇲🇦 Hecho para Marruecos', 'trust.s2': '🔒 100% privado', 'trust.s3': '⚡ Instantáneo',
    'stat.1': 'para siempre', 'stat.2': 'por factura', 'stat.3': 'en tu navegador', 'stat.4': 'IVA Marruecos listo',
    'mini.ttc': 'Total',
    'feat.title': 'Todo lo que necesitas para facturar sin estrés',
    'feat.sub': 'Una herramienta pensada para freelances, artesanos y pymes.',
    'feat.1.t': 'Facturas y presupuestos', 'feat.1.d': 'Convierte un presupuesto en factura con un clic, con numeración automática.',
    'feat.2.t': 'Exportar PDF', 'feat.2.d': 'Impresión A4 impecable o guardado directo en PDF.',
    'feat.3.t': 'IVA Marruecos incluido', 'feat.3.d': '20%, 14%, 10%, 7% o exento: los cálculos son automáticos.',
    'feat.4.t': '3 monedas', 'feat.4.d': 'Dírham, Euro o Dólar — perfecto para clientes internacionales.',
    'feat.5.t': '100% privado', 'feat.5.d': 'Ningún dato se envía a Internet. Todo queda en tu dispositivo.',
    'feat.6.t': 'Trilingüe', 'feat.6.d': 'Francés, inglés y español para facturar en todo el mundo.',
    'app.title': 'Crea tu documento',
    'srv.tag': '🧑‍💼 Servicio de facturación',
    'srv.title': '¿Sin tiempo para tu factura? Nosotros la hacemos.',
    'srv.sub': 'Envíanos tus datos por WhatsApp. Te devolvemos una factura o presupuesto profesional en PDF, listo para tu cliente — en menos de 5 minutos.',
    'srv.l1': '✅ IVA de Marruecos incluido (20 / 14 / 10%)',
    'srv.l2': '✅ PDF limpio y profesional',
    'srv.l3': '✅ Pago por transferencia, Cashplus o Wafacash',
    'srv.from': 'Desde', 'srv.per': '/ documento · Pack de 5: 200 DH',
    'srv.cta': 'Pedir por WhatsApp',
    'srv.s1': 'por factura', 'srv.s2': 'precio simple', 'srv.s3': 'conforme Marruecos',
    'price.title': 'Precios simples y honestos',
    'price.sub': 'Empieza gratis. Pasa a PRO cuando quieras. Pago 100% compatible con Marruecos 🇲🇦',
    'price.free.note': 'Para siempre', 'price.pro.note': 'o 490 DH/año (2 meses gratis)', 'price.ent.note': 'Para equipos',
    'price.f4': 'IVA Marruecos 20/14/10/7/0%', 'price.p5': 'Soporte prioritario WhatsApp',
    'price.b3': 'Facturas recurrentes', 'price.b4': 'Formación gratis',
    'test.title': 'Ya facturan con FacturFacile',
    'test.1': '"Creé mi primera factura en 3 minutos. Simple y pro, justo lo que necesitaba."',
    'test.1r': 'Desarrollador freelance, Casablanca',
    'test.2': '"El IVA de Marruecos ya está gestionado, no calculo a mano. Un ahorro de tiempo real."',
    'test.2r': 'Diseñadora, Rabat',
    'test.3': '"Mis clientes extranjeros pagan en euros y puedo facturar en 3 idiomas. Perfecto."',
    'test.3r': 'Consultor, Marrakech',
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Es realmente gratis?',
    'faq.a1': 'Sí. El plan Gratis es ilimitado y sin registro. Solo pagas si quieres las opciones PRO.',
    'faq.q2': '¿Están seguros mis datos?',
    'faq.a2': 'Por supuesto. Todo se calcula en tu navegador: ningún dato se envía a Internet.',
    'faq.q3': '¿Se gestiona el IVA de Marruecos?',
    'faq.a3': 'Sí, los tipos 20%, 14%, 10%, 7% y la exención 0% (exportación) son automáticos.',
    'faq.q4': '¿Cómo pagar PRO desde Marruecos?',
    'faq.a4': 'Por transferencia BMCE, Cashplus o Wafacash para clientes locales, y Payoneer para internacional.',
    'faq.q5': '¿Puedo facturar a clientes extranjeros?',
    'faq.a5': 'Sí: elige la moneda € o $, IVA 0% (exención exportación) y el idioma de tu cliente.',
    'cta.title': '¿Listo para crear tu primera factura?',
    'cta.sub': 'Gratis, sin registro, en 2 minutos.',
    'cta.btn': 'Crear mi factura ahora',
    'footer.about': 'El generador de facturas y presupuestos más simple para freelances y pymes en Marruecos y el mundo.',
    'footer.nav': 'Navegación', 'footer.contact': 'Contacto', 'footer.partners': 'Socios',
    'footer.rights': 'Todos los derechos reservados', 'footer.made': 'Hecho en Marruecos',
    'type.devis': 'Presupuesto', 'type.facture': 'Factura',
    'title.devis': 'PRESUPUESTO', 'title.facture': 'FACTURA',
    'doc.you': 'Tu empresa / nombre', 'doc.client': 'Cliente',
    'doc.num': 'Nº', 'doc.date': 'Fecha', 'doc.notes': 'Condiciones / notas',
    'col.desc': 'Descripción', 'col.qty': 'Cant.', 'col.pu': 'PVP sin imp.',
    'col.tva': 'IVA %', 'col.total': 'Total sin imp.',
    'lines.add': '+ Añadir línea',
    'tot.ht': 'Total sin imp.', 'tot.ttc': 'Total con imp.',
    'act.currency': 'Moneda', 'act.print': '🖨️ Imprimir / Guardar en PDF',
    'act.tva': 'IVA',
    'tva.20': '20 % (tipo general)', 'tva.14': '14 % (tipo intermedio)',
    'tva.10': '10 % (tipo reducido)', 'tva.7': '7 % (tipo reducido)',
    'tva.0': '0 % – Exento / fuera de Marruecos',
    'act.save': '💾 Guardar', 'act.open': '📂 Abrir', 'act.reset': '♻️ Nuevo documento',
    'price.title': 'Pasa a la versión PRO',
    'price.sub': 'Pago internacional seguro – tarjeta, Payoneer o transferencia.',
    'price.free.name': 'Gratis', 'price.free.btn': 'Usar gratis',
    'price.badge': 'POPULAR', 'price.month': '/mes',
    'price.f1': 'Presupuestos y facturas ilimitados', 'price.f2': 'Exportación PDF', 'price.f3': '3 monedas (DH, €, $)',
    'price.p1': 'Logo y colores personalizados', 'price.p2': 'Clientes guardados',
    'price.p3': 'Exportación PDF por lotes', 'price.p4': 'Soporte prioritario',
    'price.pro.btn': 'Suscribirse',
    'price.b1': 'Todo lo de PRO', 'price.b2': 'Multiusuario (5)', 'price.b3': 'API e integraciones',
    'price.ent.btn': 'Contactar',
    'price.note': '💡 Opciones de pago: tarjeta · Payoneer · transferencia',
    'paySoon': '¡Muy pronto disponible! El pago online llegará muy pronto. Gracias por tu apoyo 🙏',
    'help.title': '¿Cómo funciona?',
    'help.s1': 'Rellena tus datos y los del cliente.',
    'help.s2': 'Añade tus líneas (descripción, cantidad, precio).',
    'help.s3': 'Haz clic en «Imprimir» y elige «Guardar en PDF».',
    'help.s4': 'Envía el PDF a tu cliente. ¡Listo!',
    'help.info': 'ℹ️ Nada se envía a Internet: todo se guarda en tu navegador.',
    'saved': '✅ Documento guardado en tu navegador.',
    'noSave': 'No hay ningún documento guardado.',
    'loaded': '📂 Documento cargado.',
    'confirmNew': '¿Crear un nuevo documento? Los cambios no guardados se perderán.',
    'pay.title': 'Elige tu medio de pago',
    'pay.m1': 'Transferencia bancaria (Marruecos)',
    'pay.m1d': 'Envía el importe al siguiente RIB y luego envía el comprobante:',
    'pay.copy': '📋 Copiar RIB',
    'pay.m2': 'Cashplus / Wafacash / Western Union',
    'pay.m2d': 'Ve a la agencia más cercana, envía el importe y luego envíanos el recibo (nº de transferencia).',
    'pay.m3': 'Payoneer (para clientes internacionales)',
    'pay.m3d': 'Los clientes fuera de Marruecos pagan con Payoneer – el dinero llega a tu cuenta Payoneer, retiro en Marruecos.',
    'pay.m3b': 'Abrir una cuenta Payoneer',
    'pay.contact': '📩 Una vez pagado, envía el comprobante:',
    'pay.mail': '✉️ Correo',
    'pay.tip': '💡 Guarda siempre el recibo: sirve de factura.',
    'pay.copied': '✅ ¡RIB copiado!',
  },
};

// ---------- Langue ----------
let lang = localStorage.getItem('facturfacile_lang') || 'fr';

function setLang(l) {
  lang = l;
  localStorage.setItem('facturfacile_lang', l);
  applyLang();
}

function t(key) {
  return (window.I18N[lang] && window.I18N[lang][key]) || window.I18N.fr[key] || key;
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  ['fr', 'en', 'es'].forEach((l) => {
    const b = document.getElementById('lang' + l.charAt(0).toUpperCase() + l.slice(1));
    if (b) b.classList.toggle('active', l === lang);
  });
  // Titre du document en cours (devis / facture)
  const docTitle = document.getElementById('docTitle');
  docTitle.textContent = docTitle.dataset.type === 'facture'
    ? t('title.facture') : t('title.devis');
}

// ---------- Format monétaire (DH par défaut – Maroc) ----------
let devise = 'DH';

function setCurrency(v) {
  devise = v;
  calc();
}

const money = (n) =>
  n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + devise;

// ---------- Type de document ----------
function setType(type) {
  document.getElementById('docTitle').dataset.type = type;
  document.getElementById('docTitle').textContent = t('title.' + type);
  const prefix = type === 'devis' ? 'DEV' : 'FAC';
  document.getElementById('numero').value = prefix + '-2026-001';
  document.getElementById('btnDevis').classList.toggle('active', type === 'devis');
  document.getElementById('btnFacture').classList.toggle('active', type === 'facture');
}

// ---------- TVA : appliquer un taux à toutes les lignes ----------
function setTvaAll(v) {
  document.querySelectorAll('.i-tva').forEach((i) => (i.value = v));
  calc();
}

// ---------- Lignes du tableau ----------
function addLine(desc = '', qty = 1, pu = 0, tva = null) {
  if (tva === null) tva = document.getElementById('tvaRate').value;
  const tbody = document.getElementById('linesBody');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td class="col-desc"><input type="text" class="i-desc" value="${escapeHtml(desc)}"></td>
    <td><input type="number" class="i-qty" value="${qty}" min="0" step="1"></td>
    <td><input type="number" class="i-pu" value="${pu}" min="0" step="0.01"></td>
    <td><input type="number" class="i-tva" value="${tva}" min="0" max="100" step="0.1"></td>
    <td class="line-total">0,00</td>
    <td class="no-print"><button class="del" title="Supprimer" onclick="this.closest('tr').remove(); calc();">✕</button></td>
  `;

  tbody.appendChild(tr);
  tr.querySelectorAll('input').forEach((i) => i.addEventListener('input', calc));
  calc();
}

// ---------- Calcul des totaux ----------
function calc() {
  let totalHT = 0, totalTVA = 0;

  document.querySelectorAll('#linesBody tr').forEach((tr) => {
    const qty  = parseFloat(tr.querySelector('.i-qty').value)  || 0;
    const pu   = parseFloat(tr.querySelector('.i-pu').value)   || 0;
    const tva  = parseFloat(tr.querySelector('.i-tva').value)  || 0;
    const ht   = qty * pu;

    totalHT += ht;
    totalTVA += ht * (tva / 100);
    tr.querySelector('.line-total').textContent = money(ht);
  });

  document.getElementById('totalHT').textContent  = money(totalHT);
  document.getElementById('totalTVA').textContent = money(totalTVA);
  document.getElementById('totalTTC').textContent = money(totalHT + totalTVA);
}

// ---------- Sauvegarde locale ----------
function collectData() {
  const lignes = [];
  document.querySelectorAll('#linesBody tr').forEach((tr) => {
    lignes.push({
      desc: tr.querySelector('.i-desc').value,
      qty:  tr.querySelector('.i-qty').value,
      pu:   tr.querySelector('.i-pu').value,
      tva:  tr.querySelector('.i-tva').value,
    });
  });
  return {
    type: document.getElementById('docTitle').dataset.type || 'devis',
    expediteur: document.getElementById('expediteur').value,
    client:     document.getElementById('client').value,
    numero:     document.getElementById('numero').value,
    date:       document.getElementById('date').value,
    notes:      document.getElementById('notes').value,
    devise,
    lang,
    lignes,
  };
}

function saveLocal() {
  localStorage.setItem('facturfacile', JSON.stringify(collectData()));
  alert(t('saved'));
}

function loadLocal() {
  const raw = localStorage.getItem('facturfacile');
  if (!raw) return alert(t('noSave'));
  applyData(JSON.parse(raw));
  alert(t('loaded'));
}

function applyData(d) {
  document.getElementById('expediteur').value = d.expediteur || '';
  document.getElementById('client').value     = d.client || '';
  document.getElementById('numero').value     = d.numero || '';
  document.getElementById('date').value       = d.date || '';
  document.getElementById('notes').value      = d.notes || '';
  document.getElementById('docTitle').dataset.type = d.type || 'devis';

  if (d.devise) {
    devise = d.devise;
    document.getElementById('currency').value = devise;
  }
  if (d.lang) setLang(d.lang);

  applyLang();
  document.getElementById('linesBody').innerHTML = '';
  (d.lignes || []).forEach((l) => addLine(l.desc, l.qty, l.pu, l.tva));
  if (!d.lignes || !d.lignes.length) addLine();
}

// ---------- Nouveau document ----------
function resetDoc() {
  if (!confirm(t('confirmNew'))) return;
  localStorage.removeItem('facturfacile');
  location.reload();
}

// ---------- Utilitaires ----------
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// ---------- Modale de paiement (encaissement Maroc) ----------
function openPay() {
  document.getElementById('payModal').classList.add('open');
}
function closePay() {
  document.getElementById('payModal').classList.remove('open');
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePay(); });

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(() => alert(t('pay.copied')));
}

// ---------- Démarrage ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('docTitle').dataset.type = 'devis';
  document.getElementById('date').valueAsDate = new Date();
  applyLang();
  addLine('Création de site internet', 1, 800, 20);
  addLine('Nom de domaine (.fr) – 1 an', 1, 15, 20);
  addLine('Maintenance mensuelle', 3, 50, 20);
  calc();
});
