/* projects-data.js - drives the case-study index on /projects/.
 *
 * Empty by design: the live demo shows a styled "Coming soon" placeholder so
 * no fabricated project case studies are published. Add project objects and
 * the metric-card grid renders them with no other change needed.
 *
 * Shape (all fields optional except title):
 *   {
 *     title, client, location, scope, year,
 *     metrics: [{ value, unit, label }],   // headline metrics, e.g. { value: "DN1800", unit: "", label: "Diameter" }
 *     summary, image, url,
 *     challenge, solution, delivered, results,   // long-form body (for the case-study template)
 *     specs: [{ k, v }]                          // key-spec table rows
 *   }
 *
 * CMS INTEGRATION POINT: replace this file with a fetch() from Decap CMS,
 * Sanity, or Contentful. Keep the field names above so the render in
 * assets/js/script.js (#projects-grid) works unchanged.
 */
window.PROJECTS = [];
