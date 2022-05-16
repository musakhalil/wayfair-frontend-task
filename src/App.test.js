import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import SideMenu from './components/SideMenu/SideMenu';
import {apiURL, MenuItems} from './api/MenuItems';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

{/*
  This the code to mock the redux store and make the tests compatible
*/}
const mockStore = configureMockStore();
const store = mockStore({});

{/*
  This is to mock the axios package calls
*/}
jest.mock('axios');

{/*
  Main Application Test Scenarios
*/}
describe('App component', () => {
  test('it renders without errors or warnings', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

{/*
  Side Menu Test Scenarios
*/}
describe('Side Menu', () => {
   {/*
     Scenario 1: check if the menu returns items
   */}
  it("it returns menu items list", async () => {
    const links = [
      {
         "title": "Reporting",
         "url": null,
         "id": "menu-reporting",
         "icon": "reporting",
         "hasAlert": null,
         "children": [
            {
               "title": "Sales Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index",
               "id": "menu-sales-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Forecast",
               "url": "https://partnerswayfaircom.csnzoo.com/v/forecast/index/",
               "id": "menu-forecast",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Consumer Insights",
               "url": "https://partnerswayfaircom.csnzoo.com/d/tools/report/dashboard#consumerinsights",
               "id": "menu-consumer-insights",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Supplier Registration Compliance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/tools/supplier_registration_compliance/index",
               "id": "menu-supplier-registration-compliance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Fulfillment Performance Diagnostics",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier_dashboard/supplier_fulfillment/index",
               "id": "menu-fulfillment-performance-diagnostics",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Lead Time Performance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/lead_time_performance/index",
               "id": "menu-leadtime-performance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Customer Incidents Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/customer-incidents-dashboard/index",
               "id": "menu-customer-incidents-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Tickets",
         "url": "https://partnerswayfaircom.csnzoo.com/app/tickets",
         "id": "menu-ticket",
         "icon": "tickets",
         "hasAlert": null,
         "children": []
      },
      {
         "title": "Orders",
         "url": null,
         "id": "menu-orders-management",
         "icon": "orders",
         "hasAlert": null,
         "children": [
            {
               "title": "Overview",
               "url": "https://partnerswayfaircom.csnzoo.com/orders",
               "id": "menu-orders-management-overview",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Order Management",
               "url": "https://partnerswayfaircom.csnzoo.com/orders",
               "id": "menu-orders-management-item",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "All Order Alerts",
               "url": null,
               "id": "menu-orders-all-order-alerts",
               "icon": null,
               "hasAlert": null,
               "children": [
                  {
                     "title": "Overview",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index",
                     "id": "menu-orders-all-order-alerts-overview",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Overdue Orders",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/overdue_orders_alerts",
                     "id": "menu-orders-overdue-orders",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Late Registration",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/late_registration_alerts",
                     "id": "menu-orders-late-registration",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pending Cancellations",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/pending_cancellation_alerts",
                     "id": "menu-orders-pending-cancellations",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pending Ship Address Changes",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/ship_address_changes_alerts",
                     "id": "menu-orders-allalerts-pending-shipaddress-changes",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pending Ship Speed Changes",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/ship_speed_changes_alerts",
                     "id": "menu-orders-pending-shipspeed-changes",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Unconfirmed Replacement Parts",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/unconfirmed_replacement_part_alerts",
                     "id": "menu-orders-allalerts-unconfirmed-replacement-parts",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Late Replacement Parts",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/late_replacement_part_alerts",
                     "id": "menu-orders-late-replacement-parts",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pending RMAs",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/pending_rma_alerts",
                     "id": "menu-orders-pending-rm-as",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Failed Pickups",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/order/order_management/index#alerts/failed_pickup_alerts",
                     "id": "menu-orders-failed-pickups",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  }
               ]
            },
            {
               "title": "Order Exports",
               "url": "https://partnerswayfaircom.csnzoo.com/v/order/export/index",
               "id": "menu-orders-exports",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Pickup Center",
               "url": "https://partnerswayfaircom.csnzoo.com/transportation/pickup_center/calendar",
               "id": "menu-orders-pickup-center",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "CastleGate",
         "url": null,
         "id": "menu-wfs-management",
         "icon": "castleGate",
         "hasAlert": null,
         "children": [
            {
               "title": "Get Started",
               "url": "https://partnerswayfaircom.csnzoo.com//castlegate",
               "id": "menu-wfs-management-get-started",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Inventory",
         "url": null,
         "id": "menu-inventory",
         "icon": "inventory",
         "hasAlert": null,
         "children": [
            {
               "title": "Overview",
               "url": "https://partnerswayfaircom.csnzoo.com/#",
               "id": "menu-inventory-overview",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Inventory Integration Score",
               "url": "https://partnerswayfaircom.csnzoo.com/v/integration-score-dashboard/index",
               "id": "menu-inventory-integration-score",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Inventory Alerts",
               "url": "https://partnerswayfaircom.csnzoo.com/v/inventory_management/inventory_alerts/index",
               "id": "menu-inventory-alerts",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Inventory Management",
               "url": "https://partnerswayfaircom.csnzoo.com/v/inventory_management/inventory/management_app",
               "id": "menu-inventory-management",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Product Discontinuation",
               "url": "https://partnerswayfaircom.csnzoo.com/product-discontinuation/app",
               "id": "menu-inventory-product-discontinuation",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Current Inventory",
               "url": "https://partnerswayfaircom.csnzoo.com/v/inventory_management/inventory_stock_status/index",
               "id": "menu-inventory-current-inventory",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Products",
         "url": null,
         "id": "menu-pricing",
         "icon": "products",
         "hasAlert": null,
         "children": [
            {
               "title": "Overview",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/catalog_management/index",
               "id": "menu-pricing-overview",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Product Management",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/catalog_management/index",
               "id": "menu-pricing-product-management",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Pricing Hub",
               "url": null,
               "id": "menu-pricing-hub",
               "icon": null,
               "hasAlert": null,
               "children": [
                  {
                     "title": "Overview",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/pricing_hub/app/index",
                     "id": "menu-pricing-hub-overview",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pricing Updates",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/pricing/app/index",
                     "id": "menu-pricing-hub-updates",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Pricing Request Management",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/pricing_request_management/batch_summary/index",
                     "id": "menu-pricing-hub-request-management",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  }
               ]
            },
            {
               "title": "Shipping Dimensions",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/shipping_dimension/shipping_dimension/search",
               "id": "menu-pricing-shipping-dimensions",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Product Attribute Management",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/product_specification/management/index",
               "id": "menu-pricing-product-attribute-management",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Tried & True",
               "url": "https://partnerswayfaircom.csnzoo.com/triedandtrue",
               "id": "menu-pricing-tried-and-true",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Supplier-funded Reviews",
               "url": "https://partnerswayfaircom.csnzoo.com/fundedreviews",
               "id": "menu-pricing-funded-reviews",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Product Compliance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/product_certification/product_certification/index",
               "id": "menu-pricing-product-compliance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Shop Your Catalog",
               "url": "https://partnerswayfaircom.csnzoo.com/v/catalog/shop_your_catalog/index",
               "id": "menu-shop-your-catalog",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Image & Media Management",
               "url": "https://partnerswayfaircom.csnzoo.com/v/product_media/media_management/load",
               "id": "menu-pricing-media-management",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Premium Shelf",
         "url": null,
         "id": "menu-events-premium-shelf",
         "icon": "premiumShelf",
         "hasAlert": null,
         "children": [
            {
               "title": "Accelerant Hub",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/opportunity_hub/app/index",
               "id": "menu-events-accelerant-hub",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Promotions Manager",
               "url": "https://partnerswayfaircom.csnzoo.com/v/promotions/supplier_promotions_manager/index",
               "id": "menu-events-promotions-manager",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Events",
               "url": null,
               "id": "menu-events",
               "icon": null,
               "hasAlert": null,
               "children": [
                  {
                     "title": "Event Planning",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/event_planning/event/index",
                     "id": "menu-events-planning",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Event Preview",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/event_preview/preview/index",
                     "id": "menu-events-preview",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  }
               ]
            }
         ]
      },
      {
         "title": "Account Management",
         "url": null,
         "id": "menu-account",
         "icon": null,
         "hasAlert": null,
         "children": [
            {
               "title": "Warehouse Management",
               "url": null,
               "id": "menu-account-warehouse-management",
               "icon": null,
               "hasAlert": null,
               "children": [
                  {
                     "title": "Overview",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/warehouse/warehouse_normal_hours/manage",
                     "id": "menu-account-warehouse-management-overview",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Warehouse Closures",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/warehouse/warehouse_quarter/manage",
                     "id": "menu-account-warehouse-closures",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  },
                  {
                     "title": "Warehouse Hours",
                     "url": "https://partnerswayfaircom.csnzoo.com/v/warehouse/warehouse_normal_hours/manage",
                     "id": "menu-account-warehouse-normal-hours",
                     "icon": null,
                     "hasAlert": null,
                     "children": []
                  }
               ]
            },
            {
               "title": "Supplier Account Details",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/account_details/index",
               "id": "menu-account-supplier-account-details",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Supplier Setup Details",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/setup/wizard/index",
               "id": "menu-account-supplier-setup-details",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Certificate of Insurance Management",
               "url": "https://partnerswayfaircom.csnzoo.com/coi_management.php",
               "id": "menu-account-coi-management",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Download Center",
         "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/download_center/management/app",
         "id": "download-center",
         "icon": "downloadCenter",
         "hasAlert": null,
         "children": []
      },
      {
         "title": "Help & Support",
         "url": null,
         "id": "help-and-support",
         "icon": "helpAndSupport",
         "hasAlert": null,
         "children": [
            {
               "title": "Help Center",
               "url": "https://partnerswayfaircom.csnzoo.com/help/2",
               "id": "help-center",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Contact Us",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier/contact/wayfair_contact/index",
               "id": "contact-us",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      }
   ];
    axios.get.mockResolvedValueOnce(links);

    const result = await MenuItems();

    expect(axios.get).toHaveBeenCalledWith(apiURL);
    expect(result).toEqual(links);
  });

   {/*
     Scenario 2: test toggle menu on button click
   */}
  it("it is expanded by default and toggles on hamburger menu click", async () => {

   render(
       <Provider store={store}>
         <SideMenu />
       </Provider>
     );
   const menuButton = screen.getByTitle('Menu-Button');

   expect(menuButton).toHaveAttribute("aria-pressed", "true");
   
   fireEvent.click(menuButton);
   expect(menuButton).toHaveAttribute("aria-pressed", "false");
   
   fireEvent.click(menuButton);
   expect(menuButton).toHaveAttribute("aria-pressed", "true");
  });

   {/*
     Scenario 3: checking if the menu would still work correctly if no items were passed to the SideMenu component
   */}
  it("it renders fine when no items are sent to the component", async () => {
    const tree = renderer.create(
      <Provider store={store}>
         <SideMenu />
       </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

   {/*
     Scenario 4: checking if the menu would still work correctly if only 1 item was passed to the SideMenu component
   */}
   it("it renders fine when 1 item is sent to the component", async () => {
      const links = [
      {
         "title": "Reporting",
         "url": null,
         "id": "menu-reporting",
         "icon": "reporting",
         "hasAlert": null,
         "children": [
            {
               "title": "Sales Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index",
               "id": "menu-sales-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Forecast",
               "url": "https://partnerswayfaircom.csnzoo.com/v/forecast/index/",
               "id": "menu-forecast",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Consumer Insights",
               "url": "https://partnerswayfaircom.csnzoo.com/d/tools/report/dashboard#consumerinsights",
               "id": "menu-consumer-insights",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Supplier Registration Compliance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/tools/supplier_registration_compliance/index",
               "id": "menu-supplier-registration-compliance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Fulfillment Performance Diagnostics",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier_dashboard/supplier_fulfillment/index",
               "id": "menu-fulfillment-performance-diagnostics",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Lead Time Performance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/lead_time_performance/index",
               "id": "menu-leadtime-performance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Customer Incidents Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/customer-incidents-dashboard/index",
               "id": "menu-customer-incidents-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
   ];
      const tree = renderer.create(
      <Provider store={store}>
         <SideMenu items={links} />
         </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   {/*
     Scenario 5: checking if the menu would still work correctly if 2 items were passed to the SideMenu component
   */}
   it("it renders fine when 2 items are sent to the component", async () => {
   const links = [
      {
         "title": "Reporting",
         "url": null,
         "id": "menu-reporting",
         "icon": "reporting",
         "hasAlert": null,
         "children": [
            {
               "title": "Sales Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index",
               "id": "menu-sales-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Forecast",
               "url": "https://partnerswayfaircom.csnzoo.com/v/forecast/index/",
               "id": "menu-forecast",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Consumer Insights",
               "url": "https://partnerswayfaircom.csnzoo.com/d/tools/report/dashboard#consumerinsights",
               "id": "menu-consumer-insights",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Supplier Registration Compliance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/tools/supplier_registration_compliance/index",
               "id": "menu-supplier-registration-compliance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Fulfillment Performance Diagnostics",
               "url": "https://partnerswayfaircom.csnzoo.com/v/supplier_dashboard/supplier_fulfillment/index",
               "id": "menu-fulfillment-performance-diagnostics",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Lead Time Performance",
               "url": "https://partnerswayfaircom.csnzoo.com/v/lead_time_performance/index",
               "id": "menu-leadtime-performance",
               "icon": null,
               "hasAlert": null,
               "children": []
            },
            {
               "title": "Customer Incidents Dashboard",
               "url": "https://partnerswayfaircom.csnzoo.com/v/customer-incidents-dashboard/index",
               "id": "menu-customer-incidents-dashboard",
               "icon": null,
               "hasAlert": null,
               "children": []
            }
         ]
      },
      {
         "title": "Tickets",
         "url": "https://partnerswayfaircom.csnzoo.com/app/tickets",
         "id": "menu-ticket",
         "icon": "tickets",
         "hasAlert": null,
         "children": []
      },
   ];
   const tree = renderer.create(
      <Provider store={store}>
         <SideMenu items={links} />
      </Provider>
   ).toJSON();
   expect(tree).toMatchSnapshot();
   });
});