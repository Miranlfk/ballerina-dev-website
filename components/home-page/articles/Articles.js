/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
// import Image from 'next-image-export-optimizer';

import { prefix } from '../../../utils/prefix';
import styles from './Articles.module.css';

export default function Articles(props) {

  return (
    <>
      <Col xs={12}>
        <Container>
          <Row>
            <Col sm={12} className='sectionTitle'>
              <h2 id="ballerina-mentions" className='section'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-link-45deg mdButton pe-2"
                  viewBox="0 0 16 16"
                  onClick={(e) => props.getLink(e.target, 'ballerina-mentions')}
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                Ballerina mentions
              </h2>
            </Col>
          </Row>
          {/* <Row className={styles.resourceRow}>
            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://levelup.gitconnected.com/10-lesser-known-programming-languages-revolutionizing-the-tech-industry-july-2023-edition-64f356d0df8d">
                      <h4 className="card-title" >10 lesser-known programming languages revolutionizing the tech industry</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Arslan Mirza</p>
                  <p className={styles.date}>Jul 4, 2023</p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                      <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Parth Patel</p>
                  <p className={styles.date}>June 19, 2023</p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Article</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://www.codelivly.com/lesser-known-programming-languages-worth-exploring/">
                      <h4>8 lesser-known programming languages worth exploring</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Codelivly</p>
                  <p className={styles.date}>June 13, 2023</p>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}


          {/* <Row className={styles.resourceRow}>
            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://www.tatvasoft.com/blog/top-12-microservices-frameworks/">
                      <h4 className="card-title" >Top 12 microservices frameworks</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Vishal Shah</p>
                  <p className={styles.date}>Apr 25, 2023</p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Article</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://levelup.gitconnected.com/14-mind-blowing-programming-languages-youve-probably-never-heard-of-b96550980661">
                      <h4 className="card-title" >14 programming languages you&apos;ve probably never heard of</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Clement Brian</p>
                  <p className={styles.date}>Apr 12, 2023</p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>Article</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://camunda.com/blog/2022/09/seven-best-programming-languages-for-microservices/">
                      <h4>7 best programming languages for microservices</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Josh Wulf</p>
                  <p className={styles.date}>September 29, 2022</p>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}

          {/* <Row>
            <Col sm={12} md={12} lg={3} style={{display:"flex", flexWrap:"row wrap", flexDirection:"column"}}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Img variant="top" src="/images/1_zcZH8qdrFHY7f503LthNJA.webp" />
                  <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://levelup.gitconnected.com/10-lesser-known-programming-languages-revolutionizing-the-tech-industry-july-2023-edition-64f356d0df8d">
                      <h4 className="card-title" >10 lesser-known programming languages revolutionizing the tech industry</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Arslan Mirza</p>
                  <p className={styles.date}>Jul 4, 2023</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={3} style={{display:"flex", flexWrap:"row wrap", flexDirection:"column"}}>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={3} style={{display:"flex", flexWrap:"row wrap", flexDirection:"column"}}>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={3} style={{display:"flex", flexWrap:"row wrap", flexDirection:"column"}}>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

          </Row> */}

          {/* <Row>
            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
                <div>
                  
                  <h3>Automate anything</h3>
                  <div className={styles.cardDescription}>
                    <p>Automation is just code after all - write a main() and do whatever you want.</p>

                    <p>Use Ballerina&apos;s extended standard library to connect to any system, speak any protocol, process any data, and run it anywhere (on a VM, in Kubernetes, or just as a script).</p>

                    <p>Powerful data transformations that can be simultaneously programmed graphically and as code makes data integration a breeze.</p>

                  </div>
                </div>

                <div className={styles.cardLinks}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/ballerina-guides/integration-samples/blob/main/github-pull-requests-to-gsheets/main.bal" className={styles.cDownload}>
                    See sample automation: GitHub to Google Sheets
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
                <div>
                  <h3>Event-driven integrations</h3>
                  <div className={styles.cardDescription}>
                    <p>Events are core to the responsive enterprise. Ballerina makes it simple to consume or produce events.</p>

                    <p>Subscribe to any kind of event source, including WebHooks, Kafka, GraphQL, gRPC, AMQP, email, or react to system events such as file upload and do whatever you want in a type-safe development model with subscription, data binding, and error handling is already taken care of for you.</p>

                    <p>Be an event producer in any protocol you like.</p>
                  </div>
                </div>

                <div className={styles.cardLinks}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/ballerina-guides/integration-samples/blob/main/gcalendar-new-event-to-trello-card/main.bal" className={styles.cDownload}>
                    See sample event integration: Google Calendar to Trello Card
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
                <div>
                  <h3>Integrations as APIs</h3>
                  <div className={styles.cardDescription}>
                    <p>Ballerina&apos;s service creation abstractions make it simple to take any integration and make it reusable as an API.</p>

                    <p>Use Ballerina service types for HTTP services, WebSockets, GraphQL, gRPC, and more to take your integration code, parameterize it and make it a reusable integration.</p>

                    <p>APIs are the new DLLs. Exposing your integrations as APIs is how your integrated capability adds new value to your business.</p>
                  </div>
                </div>

                <div className={styles.cardLinks}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/ballerina-guides/integration-samples/blob/main/azure-cosmosdb-data-as-rest-api/main.bal" className={styles.cDownload}>
                    See sample integration as an API: Azure Cosmos DB data as a REST API
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
                <div>
                  <h3>Integrations as APIs</h3>
                  <div className={styles.cardDescription}>
                    <p>Ballerina&apos;s service creation abstractions make it simple to take any integration and make it reusable as an API.</p>

                    <p>Use Ballerina service types for HTTP services, WebSockets, GraphQL, gRPC, and more to take your integration code, parameterize it and make it a reusable integration.</p>

                    <p>APIs are the new DLLs. Exposing your integrations as APIs is how your integrated capability adds new value to your business.</p>
                  </div>
                </div>

                <div className={styles.cardLinks}>
                  <a target="_blank" rel="noreferrer" href="https://github.com/ballerina-guides/integration-samples/blob/main/azure-cosmosdb-data-as-rest-api/main.bal" className={styles.cDownload}>
                    See sample integration as an API: Azure Cosmos DB data as a REST API
                  </a>
                </div>
              </div>
            </Col>
          </Row> */}


<Row>
            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
              <Card className={styles.cardBox}>
                <Card.Body className={styles.cardBody}>
                  <Card.Img variant="top" src="/images/1_zcZH8qdrFHY7f503LthNJA.webp" />
                  <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                  <Card.Text className={styles.cardText}>
                    <a target="_blank" rel="noreferrer" href="https://levelup.gitconnected.com/10-lesser-known-programming-languages-revolutionizing-the-tech-industry-july-2023-edition-64f356d0df8d">
                      <h4 className="card-title" >10 lesser-known programming languages revolutionizing the tech industry</h4>
                    </a>
                  </Card.Text>
                  <p className={`${styles.author} card-text`}> By Arslan Mirza</p>
                  <p className={styles.date}>Jul 4, 2023</p>
                </Card.Body>
              </Card>

              <div>
                                <h3>Automate anything</h3>
                                <div className={styles.cardDescription}>
                                    <p>Automation is just code after all - write a main() and do whatever you want.</p>

                                    <p>Use Ballerina&apos;s extended standard library to connect to any system, speak any protocol, process any data, and run it anywhere (on a VM, in Kubernetes, or just as a script).</p>

                                    <p>Powerful data transformations that can be simultaneously programmed graphically and as code makes data integration a breeze.</p>

                                </div>
                                </div>
                                {/* <div className={styles.sampleText}>
                                    <p>See Sample Automation: GitHub to Google Sheets</p>
                                </div> */}

                                <div className={styles.cardLinks}>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/ballerina-guides/integration-samples/blob/main/github-pull-requests-to-gsheets/main.bal" className={styles.cDownload}>
                                        See sample automation: GitHub to Google Sheets
                                    </a>
                                </div>
                            
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
              <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>

                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
              <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>

                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col xs={12} md={3} lg={3} className={styles.useCaseCard}>
              <div className={styles.cardWrapper}>
              <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>

                  <Card className={styles.cardBox}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Blog posts</Card.Title>
                      <Card.Text className={styles.cardText}>
                        <a target="_blank" rel="noreferrer" href="https://www.cmarix.com/blog/best-microservices-frameworks/">
                          <h4 className="card-title" >Top microservices frameworks to build scalable applications</h4>
                        </a>
                      </Card.Text>
                      <p className={`${styles.author} card-text`}> By Parth Patel</p>
                      <p className={styles.date}>June 19, 2023</p>
                    </Card.Body>
                  </Card>
              </div>
            </Col>
          </Row>

        </Container>
      </Col>
    </>
  );
}
