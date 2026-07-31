function WhyChooseUs() {
      const features = [
          {
                title: "Fast & Reliable",
                      description: "Transactions are processed instantly with high availability.",
                            icon: "⚡",
                                },
                                    {
                                          title: "Secure Payments",
                                                description: "Your data and payments are protected with modern security.",
                                                      icon: "🔒",
                                                          },
                                                              {
                                                                    title: "24/7 Support",
                                                                          description: "Our support team is available whenever you need assistance.",
                                                                                icon: "💬",
                                                                                    },
                                                                                        {
                                                                                              title: "Affordable Pricing",
                                                                                                    description: "Enjoy competitive pricing on all digital services.",
                                                                                                          icon: "💰",
                                                                                                              },
                                                                                                                ];

                                                                                                                  return (
                                                                                                                      <section className="container py-5">
                                                                                                                            <h2 className="text-center mb-5">Why Choose DeenByte?</h2>

                                                                                                                                  <div className="row g-4">
                                                                                                                                          {features.map((feature) => (
                                                                                                                                                    <div className="col-md-6" key={feature.title}>
                                                                                                                                                                <div className="card shadow-sm h-100">
                                                                                                                                                                              <div className="card-body text-center">
                                                                                                                                                                                              <div style={{ fontSize: "3rem" }}>{feature.icon}</div>

                                                                                                                                                                                                              <h4 className="mt-3">{feature.title}</h4>

                                                                                                                                                                                                                              <p>{feature.description}</p>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                      export default WhyChooseUs;
