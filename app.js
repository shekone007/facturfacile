/* =====================================================
   FacturFacile – logique de l'application
   Tout se passe dans le navigateur (aucun serveur).
   ===================================================== */

// ---------- Format monétaire français ----------
const eur = (n) =>
  n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

// ---------- Type de document (devis / facture) ----------
function setType(type) {
  const isDevis = type === 'devis';
  document.getElementById('docTitle').textContent = isDevis ? 'DEVIS' : 'FACTURE';
  document.getElementById('numero').value = (isDevis ? 'DEV' : 'FAC') + '-2026-001';
  document.getElementById('btnDevis').classList.toggle('active', isDevis);
  document.getElementById('btnFacture').classList.toggle('active', !isDevis);
}

// ---------- Lignes du tableau ----------
function addLine(desc = '', qty = 1, pu = 0, tva = 20) {
  const tbody = document.getElementById('linesBody');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td class="col-desc"><input type="text" class="i-desc" value="${escapeHtml(desc)}" placeholder="Prestation ou produit"></td>
    <td><input type="number" class="i-qty" value="${qty}" min="0" step="1"></td>
    <td><input type="number" class="i-pu" value="${pu}" min="0" step="0.01"></td>
    <td><input type="number" class="i-tva" value="${tva}" min="0" max="100" step="0.1"></td>
    <td class="line-total">0,00 €</td>
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
    const tvaA = ht * (tva / 100);

    totalHT += ht;
    totalTVA += tvaA;
    tr.querySelector('.line-total').textContent = eur(ht);
  });

  document.getElementById('totalHT').textContent  = eur(totalHT);
  document.getElementById('totalTVA').textContent = eur(totalTVA);
  document.getElementById('totalTTC').textContent = eur(totalHT + totalTVA);
}

// ---------- Sauvegarde locale (localStorage) ----------
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
    type: document.getElementById('docTitle').textContent,
    expediteur: document.getElementById('expediteur').value,
    client:     document.getElementById('client').value,
    numero:     document.getElementById('numero').value,
    date:       document.getElementById('date').value,
    notes:      document.getElementById('notes').value,
    lignes,
  };
}

function saveLocal() {
  localStorage.setItem('facturfacile', JSON.stringify(collectData()));
  alert('✅ Document enregistré dans votre navigateur.');
}

function loadLocal() {
  const raw = localStorage.getItem('facturfacile');
  if (!raw) return alert('Aucun document sauvegardé.');
  applyData(JSON.parse(raw));
  alert('📂 Document chargé.');
}

function applyData(d) {
  document.getElementById('expediteur').value = d.expediteur || '';
  document.getElementById('client').value     = d.client || '';
  document.getElementById('numero').value     = d.numero || '';
  document.getElementById('date').value       = d.date || '';
  document.getElementById('notes').value      = d.notes || '';
  document.getElementById('docTitle').textContent = d.type || 'DEVIS';

  document.getElementById('linesBody').innerHTML = '';
  (d.lignes || []).forEach((l) => addLine(l.desc, l.qty, l.pu, l.tva));
  if (!d.lignes || !d.lignes.length) addLine();
}

// ---------- Nouveau document ----------
function resetDoc() {
  if (!confirm('Créer un nouveau document ? Les modifications non enregistrées seront perdues.')) return;
  localStorage.removeItem('facturfacile');
  location.reload();
}

// ---------- Utilitaires ----------
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// ---------- Démarrage ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('date').valueAsDate = new Date();
  // 3 lignes d'exemple pour montrer l'outil en action
  addLine('Création de site internet', 1, 800, 20);
  addLine('Nom de domaine (.fr) – 1 an', 1, 15, 20);
  addLine('Maintenance mensuelle', 3, 50, 20);
  calc();
});
