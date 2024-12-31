import React from 'react';
import '../BillingStyle/Invoicing.css';
import Einvoice from '../BitsImages/imageofbilling2.jpg';
const EInvoicingComponent = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h2>E-Invoicing and Tax Compliance</h2>
        <p>
          Maintain global e-invoicing and tax compliance by leveraging pre-built integrations with
          industry-leading partners.
        </p>
        <ul>
          <li>
            Simplify operations with pre-integrated, automated e-invoicing that works directly with
            Bellary InfoTech Billing.
          </li>
          <li>
            Manage e-invoicing regulation requirements with pre-built connectors with billing tools.
          </li>
          <li>
            Apply accurate and complete taxation to invoices with bellary infotech native tax engine or
            pre-built connectors to leading tax engines.
          </li>
          <li>
            Meet compliance through country-specific templates, tax management reports, and
            e-invoice archiving capabilities.
          </li>
        </ul>
      </div>
      <div className="image-section">
        <img
          src={Einvoice}
          alt="E-Invoicing illustration"
          className="image"
        />
      </div>
    </div>
  );
};

export default EInvoicingComponent;