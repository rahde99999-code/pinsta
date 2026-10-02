"use client"

// ============================================================
//  EDIT DI SINI: isi path foto kamu (taruh file di folder public/)
// ============================================================
const photos = [
  "/ijin-kompe.jpeg",
  "/anak-kecil.jpeg",
  "/wokeh-danamasuk.jpeg",
  "/jarjit-sus.jpeg",
  "/pak-vincent.jpeg",
]

export function RandomPhoto() {
  // Duplikat array supaya loop-nya mulus (tidak ada jeda)
  const loopPhotos = [...photos, ...photos, ...photos, ...photos]

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Dekorasi titik-titik */}
      <div className="absolute top-4 left-10 w-16 h-16 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-4 right-10 w-20 h-20 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Track marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-photo-marquee w-max">
          {loopPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl border-2 border-foreground overflow-hidden shadow-pop"
            >
              <img
                src={photo}
                alt={`Dekorasi ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Badge kecil di pojok (hanya di foto pertama tiap set) */}
              {i % photos.length === 0 && (
                <div className="absolute -top-2 -right-2 rotate-[15deg]">
                  <span className="inline-block bg-accent text-white text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 rounded-full border-2 border-foreground shadow-pop">
                    ✨
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}