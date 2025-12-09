import Image from "next/image"


export default function Partners() {
  return (
     <section id="partners">
             <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Partners</h2>
                </div>
            <div className="partners-logos">
              <a href="https://partner1.com" target="_blank">
                <Image src="/assets/partner1-logo.png" alt="Partner 1 Logo" className="partner-logo" width={160} height={160} />
              </a>
              <a href="https://partner2.com" target="_blank">
                <Image src="/assets/partner2-logo.png" alt="Partner 2 Logo" className="partner-logo" width={160} height={160} />
              </a>
              <a href="https://partner3.com" target="_blank">
                <Image src="/assets/partner3-logo.png" alt="Partner 3 Logo" className="partner-logo" width={160} height={160} />
              </a>
              
            </div>
          </div>
        </section>
  )
}
