document.addEventListener('alpine:init', () => {
  Alpine.data('ordersPanel', () => ({
    // State
    orders: [
      {
        id: 'ORD-2026-0450',
        orderNumber: 'ORD-2026-0450',
        customer: 'Maple Leaf Foods',
        category: 'IBC Totes',
        orderDate: '2026-03-28T09:30:00',
        totalValue: 8475.00,
        items: 30,
        status: 'shipped',
        notes: 'Food-grade IBC totes for processing plant - Mississauga facility',
        orderItems: [
          { sku: 'NEW-1000', name: '1000L New IBC Tote', quantity: 15, unitPrice: 425.00 },
          { sku: 'BV-2IN-CL', name: '2" Ball Valve with Camlock', quantity: 15, unitPrice: 26.95 },
          { sku: 'COV-600D', name: 'IBC Tote Cover 600D', quantity: 10, unitPrice: 59.95 }
        ]
      },
      {
        id: 'ORD-2026-0451',
        orderNumber: 'ORD-2026-0451',
        customer: 'Suncor Energy',
        category: 'IBC Totes',
        orderDate: '2026-03-27T14:20:00',
        totalValue: 12840.00,
        items: 42,
        status: 'ordered',
        notes: 'Bulk order for Fort McMurray site - chemical storage',
        orderItems: [
          { sku: 'NEW-1250', name: '1250L New IBC Tote', quantity: 20, unitPrice: 485.00 },
          { sku: 'SCP-4D', name: 'Spill Containment Pallet', quantity: 10, unitPrice: 245.00 },
          { sku: 'HTR-1000', name: 'IBC Tote Heater Blanket', quantity: 12, unitPrice: 189.00 }
        ]
      },
      {
        id: 'ORD-2026-0452',
        orderNumber: 'ORD-2026-0452',
        customer: 'BC Hydro',
        category: 'IBC Totes',
        orderDate: '2026-03-26T11:15:00',
        totalValue: 5765.00,
        items: 28,
        status: 'delivered',
        notes: 'Transformer oil storage - Vancouver depot',
        orderItems: [
          { sku: 'RCN-1000-BV', name: '1000L Reconditioned IBC Tote 2" Butterfly Valve', quantity: 10, unitPrice: 245.00 },
          { sku: 'RBTL-1000', name: '1000L Rebottled IBC Tote', quantity: 8, unitPrice: 325.00 },
          { sku: 'CAP-2IN', name: 'IBC Drain Cap 2"', quantity: 20, unitPrice: 8.95 },
          { sku: 'ADP-S60-2NPT', name: 'S60x6 to 2" NPT Adapter', quantity: 10, unitPrice: 18.95 }
        ]
      },
      {
        id: 'ORD-2026-0453',
        orderNumber: 'ORD-2026-0453',
        customer: 'Prairie Farms Co-op',
        category: 'IBC Totes',
        orderDate: '2026-03-25T16:45:00',
        totalValue: 4920.00,
        items: 36,
        status: 'delivered',
        notes: 'Seasonal fertilizer storage - Regina warehouse',
        orderItems: [
          { sku: 'RCN-1250-BV', name: '1250L Reconditioned IBC Tote 2" Ball Valve', quantity: 12, unitPrice: 285.00 },
          { sku: 'COV-210D', name: 'IBC Tote Cover 210D', quantity: 12, unitPrice: 22.95 },
          { sku: 'BFLY-2IN', name: '2" Butterfly Valve', quantity: 12, unitPrice: 24.50 }
        ]
      },
      {
        id: 'ORD-2026-0454',
        orderNumber: 'ORD-2026-0454',
        customer: 'Northern Chemical Supply',
        category: 'Drums & Containers',
        orderDate: '2026-03-24T10:30:00',
        totalValue: 7245.00,
        items: 85,
        status: 'delivered',
        notes: 'Mixed container order - Thunder Bay distribution centre',
        orderItems: [
          { sku: 'DRM-55-NEW', name: '55 Gallon Poly Drum New', quantity: 40, unitPrice: 95.00 },
          { sku: 'DRM-55-RCN', name: '55 Gallon Steel Drum Reconditioned', quantity: 25, unitPrice: 85.00 },
          { sku: 'JC-20L', name: '20L Jerry Can', quantity: 100, unitPrice: 12.95 },
          { sku: 'JUG-3L', name: '3L F-Style Jug', quantity: 200, unitPrice: 2.00 }
        ]
      },
      {
        id: 'ORD-2026-0455',
        orderNumber: 'ORD-2026-0455',
        customer: 'Maple Leaf Foods',
        category: 'IBC Totes',
        orderDate: '2026-03-23T13:00:00',
        totalValue: 6225.00,
        items: 18,
        status: 'delivered',
        notes: 'Hamilton plant expansion - new totes with heaters',
        orderItems: [
          { sku: 'NEW-1000', name: '1000L New IBC Tote', quantity: 10, unitPrice: 425.00 },
          { sku: 'HTR-1000', name: 'IBC Tote Heater Blanket', quantity: 8, unitPrice: 189.00 },
          { sku: 'SCP-4D', name: 'Spill Containment Pallet', quantity: 2, unitPrice: 245.00 }
        ]
      },
      {
        id: 'ORD-2026-0456',
        orderNumber: 'ORD-2026-0456',
        customer: 'Suncor Energy',
        category: 'Parts & Accessories',
        orderDate: '2026-03-22T09:45:00',
        totalValue: 3685.00,
        items: 65,
        status: 'delivered',
        notes: 'Replacement parts and accessories - Edmonton office',
        orderItems: [
          { sku: 'BV-2IN-CL', name: '2" Ball Valve with Camlock', quantity: 30, unitPrice: 26.95 },
          { sku: 'BFLY-2IN', name: '2" Butterfly Valve', quantity: 25, unitPrice: 24.50 },
          { sku: 'ADP-S60-2NPT', name: 'S60x6 to 2" NPT Adapter', quantity: 40, unitPrice: 18.95 },
          { sku: 'CAP-2IN', name: 'IBC Drain Cap 2"', quantity: 50, unitPrice: 8.95 }
        ]
      },
      {
        id: 'ORD-2026-0457',
        orderNumber: 'ORD-2026-0457',
        customer: 'BC Hydro',
        category: 'IBC Totes',
        orderDate: '2026-03-21T15:20:00',
        totalValue: 9700.00,
        items: 20,
        status: 'delivered',
        notes: 'New IBC totes for substation upgrades - Kelowna region',
        orderItems: [
          { sku: 'NEW-1250', name: '1250L New IBC Tote', quantity: 16, unitPrice: 485.00 },
          { sku: 'SCP-4D', name: 'Spill Containment Pallet', quantity: 8, unitPrice: 245.00 },
          { sku: 'COV-600D', name: 'IBC Tote Cover 600D', quantity: 16, unitPrice: 59.95 }
        ]
      },
      {
        id: 'ORD-2026-0458',
        orderNumber: 'ORD-2026-0458',
        customer: 'Prairie Farms Co-op',
        category: 'IBC Totes',
        orderDate: '2026-03-20T11:30:00',
        totalValue: 3250.00,
        items: 10,
        status: 'delivered',
        notes: 'Rebottled totes for water storage - Saskatoon',
        orderItems: [
          { sku: 'RBTL-1250', name: '1250L Rebottled IBC Tote', quantity: 6, unitPrice: 365.00 },
          { sku: 'NEW-500', name: '500L New IBC Tote', quantity: 4, unitPrice: 325.00 }
        ]
      },
      {
        id: 'ORD-2026-0459',
        orderNumber: 'ORD-2026-0459',
        customer: 'Northern Chemical Supply',
        category: 'IBC Totes',
        orderDate: '2026-03-19T14:00:00',
        totalValue: 5350.00,
        items: 22,
        status: 'delivered',
        notes: 'Reconditioned totes and drums for resale inventory',
        orderItems: [
          { sku: 'RCN-1000-BV', name: '1000L Reconditioned IBC Tote 2" Butterfly Valve', quantity: 12, unitPrice: 245.00 },
          { sku: 'DRM-55-RCN', name: '55 Gallon Steel Drum Reconditioned', quantity: 30, unitPrice: 85.00 }
        ]
      },
      {
        id: 'ORD-2026-0460',
        orderNumber: 'ORD-2026-0460',
        customer: 'Maple Leaf Foods',
        category: 'Drums & Containers',
        orderDate: '2026-03-18T10:15:00',
        totalValue: 2595.00,
        items: 120,
        status: 'delivered',
        notes: 'Small containers for ingredient storage - Brampton plant',
        orderItems: [
          { sku: 'JC-20L', name: '20L Jerry Can', quantity: 80, unitPrice: 12.95 },
          { sku: 'JUG-3L', name: '3L F-Style Jug', quantity: 500, unitPrice: 2.00 },
          { sku: 'DRM-55-NEW', name: '55 Gallon Poly Drum New', quantity: 5, unitPrice: 95.00 }
        ]
      },
      {
        id: 'ORD-2026-0461',
        orderNumber: 'ORD-2026-0461',
        customer: 'Suncor Energy',
        category: 'IBC Totes',
        orderDate: '2026-03-16T09:00:00',
        totalValue: 14550.00,
        items: 30,
        status: 'delivered',
        notes: 'Large order for new drilling site - Peace River',
        orderItems: [
          { sku: 'NEW-1250', name: '1250L New IBC Tote', quantity: 24, unitPrice: 485.00 },
          { sku: 'HTR-1000', name: 'IBC Tote Heater Blanket', quantity: 12, unitPrice: 189.00 },
          { sku: 'SCP-4D', name: 'Spill Containment Pallet', quantity: 6, unitPrice: 245.00 }
        ]
      }
    ],

    // Available options
    allCustomers: ['Maple Leaf Foods', 'Suncor Energy', 'BC Hydro', 'Prairie Farms Co-op', 'Northern Chemical Supply'],

    // Filters
    searchQuery: '',
    filterCustomer: 'all',
    filterStatus: 'all',
    filterDateRange: 'all',

    // Modals
    orderDetailsModal: false,
    selectedOrder: null,

    // Success message
    successMessage: '',

    // Computed: Filtered orders
    get filteredOrders() {
      return this.orders.filter(order => {
        if (this.filterCustomer !== 'all' && order.customer !== this.filterCustomer) return false;
        if (this.filterStatus !== 'all' && order.status !== this.filterStatus) return false;

        if (this.filterDateRange !== 'all') {
          const orderDate = new Date(order.orderDate);
          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          if (this.filterDateRange === 'today') {
            if (orderDate < today) return false;
          } else if (this.filterDateRange === 'week') {
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            if (orderDate < weekAgo) return false;
          } else if (this.filterDateRange === 'month') {
            const monthAgo = new Date(today);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            if (orderDate < monthAgo) return false;
          } else if (this.filterDateRange === 'quarter') {
            const quarterAgo = new Date(today);
            quarterAgo.setMonth(quarterAgo.getMonth() - 3);
            if (orderDate < quarterAgo) return false;
          }
        }

        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          return order.orderNumber.toLowerCase().includes(query) ||
                 order.customer.toLowerCase().includes(query) ||
                 order.category.toLowerCase().includes(query) ||
                 order.id.toLowerCase().includes(query);
        }
        return true;
      });
    },

    // Methods
    viewOrderDetails(order) {
      this.selectedOrder = order;
      this.orderDetailsModal = true;
    },

    getStatusLabel(status) {
      const labels = {
        'ordered': 'Ordered',
        'shipped': 'Shipped',
        'delivered': 'Delivered'
      };
      return labels[status] || status;
    },

    updateOrderStatus(order, newStatus) {
      order.status = newStatus;
      this.showSuccess(`Order ${order.orderNumber} status updated to ${this.getStatusLabel(newStatus)}`);
    },

    getOrderItems(order) {
      return order.orderItems || [];
    },

    exportOrders() {
      const csvRows = [];
      // Header
      csvRows.push('Order Number,Customer,Category,Order Date,Total Value,Items,Status,Notes');

      // Data rows
      this.filteredOrders.forEach(order => {
        const orderDate = new Date(order.orderDate).toLocaleDateString();
        const notes = (order.notes || '').replace(/"/g, '""');
        csvRows.push(`${order.orderNumber},"${order.customer}","${order.category}",${orderDate},${order.totalValue},${order.items},${order.status},"${notes}"`);
      });

      const csvContent = csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `orders-export-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
      this.showSuccess('Orders exported to CSV');
    },

    showSuccess(message) {
      this.successMessage = message;
      setTimeout(() => { this.successMessage = ''; }, 3000);
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffDays = Math.floor(diffMs / 86400000);
      const diffHours = Math.floor(diffMs / 3600000);

      if (diffHours < 24) {
        if (diffHours < 1) return 'Just now';
        return diffHours + 'h ago';
      }
      if (diffDays < 7) return diffDays + 'd ago';
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
  }));
});
