

export default function Faq() {
  return (
<section id="faq">
             <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    <div className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>What makes StoreTech different from other retail solutions?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>

                        </button>
                        <div className="faq-answer"><p>StoreTech provides a comprehensive, modular ecosystem that seamlessly integrates hardware and software. Our AI-powered approach enables true automation, allowing businesses to operate 24/7 without on-site staff while maintaining security and personalized customer experiences.</p></div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>How long does implementation take?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>

                        </button>
                        <div className="faq-answer"><p>Implementation timelines vary based on your specific needs and scale. Our modular approach allows you to start small and scale gradually. Typically, a basic setup can be completed in 2-4 weeks, with larger deployments taking 1-3 months.</p></div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Is the system scalable for growing businesses?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>

                        </button>
                        <div className="faq-answer"><p>Absolutely. Our cloud-based infrastructure and modular ecosystem are designed to grow with your business. You can easily add new stores, devices, and users as needed without significant infrastructure changes.</p></div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>What kind of support do you provide?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div className="faq-answer"><p>We provide comprehensive 24/7 support through phone, email, and chat. Our dedicated team monitors your systems proactively through the Command Center app, often resolving issues before you're even aware of them.</p></div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>How secure is the StoreTech ecosystem?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div className="faq-answer"><p>Security is our top priority. We use AI-powered security monitoring, encrypted data transmission, GDPR-compliant cloud storage, multi-method authentication, and tamper-proof hardware designs to ensure maximum security.</p></div>
                    </div>
                </div>
            </div>
        </section>  )
}
