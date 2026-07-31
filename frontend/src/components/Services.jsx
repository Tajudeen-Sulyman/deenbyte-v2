function Services() {
      const services = [
          { title: "Airtime", icon: "📱" },
              { title: "Data Bundles", icon: "📶" },
                  { title: "Electricity", icon: "⚡" },
                      { title: "Cable TV", icon: "📺" },
                          { title: "CAC Registration", icon: "🏢" },
                              { title: "AI Solutions", icon: "🤖" },
                                ];

                                  return (
                                      <section className="container py-5">
                                            <h2 className="text-center mb-5">Our Services</h2>

                                                  <div className="row g-4">
                                                          {services.map((service) => (
                                                                    <div className="col-md-4" key={service.title}>
                                                                                <div className="card shadow-sm h-100 text-center">
                                                                                              <div className="card-body">
                                                                                                              <div style={{ fontSize: "3rem" }}>{service.icon}</div>
                                                                                                                              <h5 className="mt-3">{service.title}</h5>
                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                                  </div>
                                                                                                                                                                          ))}
                                                                                                                                                                                </div>
                                                                                                                                                                                    </section>
                                                                                                                                                                                      );
                                                                                                                                                                                      }

                                                                                                                                                                                      export default Services;

