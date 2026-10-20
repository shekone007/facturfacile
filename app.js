/* =====================================================
   FacturFacile – logique de l'application
   Trilingue : FR / EN / ES
   ===================================================== */

// ---------- Dictionnaires de traduction ----------
window.I18N = {
  fr: {
    'nav.pro': 'Passer à la version PRO',
    'hero.title': 'Créez vos devis et factures en 2 minutes',
    'hero.sub': 'Gratuit, sans inscription, tout reste dans votre navigateur.',
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
    'nav.pro': 'Upgrade to PRO',
    'hero.title': 'Create quotes & invoices in 2 minutes',
    'hero.sub': 'Free, no sign-up, everything stays in your browser.',
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
    'nav.pro': 'Pasar a la versión PRO',
    'hero.title': 'Crea presupuestos y facturas en 2 minutos',
    'hero.sub': 'Gratis, sin registro, todo queda en tu navegador.',
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
    el.textContent = t(el.getAttribute('data-i18n'));
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
