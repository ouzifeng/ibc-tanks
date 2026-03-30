document.addEventListener('alpine:init', () => {
  Alpine.data('productManagement', () => ({
    // State
    products: [
      {
        id: 'PRD001',
        sku: 'RCN-1000-BV',
        name: '1000L Reconditioned IBC Tote 2" Butterfly Valve',
        category: 'Reconditioned IBC Totes',
        basePrice: 245.00,
        stock: 180,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD002',
        sku: 'RCN-1250-BV',
        name: '1250L Reconditioned IBC Tote 2" Ball Valve',
        category: 'Reconditioned IBC Totes',
        basePrice: 285.00,
        stock: 124,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD003',
        sku: 'RBTL-1000',
        name: '1000L Rebottled IBC Tote',
        category: 'Reconditioned IBC Totes',
        basePrice: 325.00,
        stock: 96,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD004',
        sku: 'RBTL-1250',
        name: '1250L Rebottled IBC Tote',
        category: 'Reconditioned IBC Totes',
        basePrice: 365.00,
        stock: 72,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD005',
        sku: 'NEW-500',
        name: '500L New IBC Tote',
        category: 'New IBC Totes',
        basePrice: 325.00,
        stock: 45,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD006',
        sku: 'NEW-1000',
        name: '1000L New IBC Tote',
        category: 'New IBC Totes',
        basePrice: 425.00,
        stock: 68,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD007',
        sku: 'NEW-1250',
        name: '1250L New IBC Tote',
        category: 'New IBC Totes',
        basePrice: 485.00,
        stock: 34,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD008',
        sku: 'COV-210D',
        name: 'IBC Tote Cover 210D',
        category: 'Parts & Accessories',
        basePrice: 22.95,
        stock: 520,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD009',
        sku: 'COV-600D',
        name: 'IBC Tote Cover 600D',
        category: 'Parts & Accessories',
        basePrice: 59.95,
        stock: 310,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD010',
        sku: 'BV-2IN-CL',
        name: '2" Ball Valve with Camlock',
        category: 'Parts & Accessories',
        basePrice: 26.95,
        stock: 640,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD011',
        sku: 'BFLY-2IN',
        name: '2" Butterfly Valve',
        category: 'Parts & Accessories',
        basePrice: 24.50,
        stock: 580,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD012',
        sku: 'ADP-S60-2NPT',
        name: 'S60x6 to 2" NPT Adapter',
        category: 'Parts & Accessories',
        basePrice: 18.95,
        stock: 890,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD013',
        sku: 'HTR-1000',
        name: 'IBC Tote Heater Blanket',
        category: 'Parts & Accessories',
        basePrice: 189.00,
        stock: 42,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD014',
        sku: 'SCP-4D',
        name: 'Spill Containment Pallet',
        category: 'Parts & Accessories',
        basePrice: 245.00,
        stock: 58,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD015',
        sku: 'DRM-55-RCN',
        name: '55 Gallon Steel Drum Reconditioned',
        category: 'Drums & Containers',
        basePrice: 85.00,
        stock: 210,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD016',
        sku: 'DRM-55-NEW',
        name: '55 Gallon Poly Drum New',
        category: 'Drums & Containers',
        basePrice: 95.00,
        stock: 175,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD017',
        sku: 'JC-20L',
        name: '20L Jerry Can',
        category: 'Drums & Containers',
        basePrice: 12.95,
        stock: 1400,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD018',
        sku: 'JUG-3L',
        name: '3L F-Style Jug',
        category: 'Drums & Containers',
        basePrice: 2.00,
        stock: 5200,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD019',
        sku: 'CAP-2IN',
        name: 'IBC Drain Cap 2"',
        category: 'Parts & Accessories',
        basePrice: 8.95,
        stock: 1350,
        status: 'active',
        lastSync: '2026-03-28 14:30:00'
      },
      {
        id: 'PRD020',
        sku: 'UNW-1000',
        name: 'Unwashed 1000L IBC Tote',
        category: 'Reconditioned IBC Totes',
        basePrice: 125.00,
        stock: 0,
        status: 'inactive',
        lastSync: '2026-03-28 14:30:00'
      }
    ],

    // Available options
    allCategories: ['New IBC Totes', 'Reconditioned IBC Totes', 'Parts & Accessories', 'Drums & Containers'],

    // Filters
    searchQuery: '',
    filterCategory: 'all',
    filterStatus: 'all',

    // Modals
    editProductModal: false,

    // Forms
    editingProduct: null,

    // Success message
    successMessage: '',

    // Computed: Filtered products
    get filteredProducts() {
      return this.products.filter(product => {
        if (this.filterCategory !== 'all' && product.category !== this.filterCategory) return false;
        if (this.filterStatus !== 'all' && product.status !== this.filterStatus) return false;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          return product.name.toLowerCase().includes(query) ||
                 product.sku.toLowerCase().includes(query) ||
                 product.category.toLowerCase().includes(query);
        }
        return true;
      });
    },

    // Methods
    openEditProduct(product) {
      this.editingProduct = JSON.parse(JSON.stringify(product));
      this.editProductModal = true;
    },

    saveProduct() {
      const index = this.products.findIndex(p => p.id === this.editingProduct.id);
      if (index > -1) {
        this.products[index] = this.editingProduct;
      }
      this.editProductModal = false;
      this.showSuccess('Product updated successfully');
    },

    toggleProductStatus(product) {
      product.status = product.status === 'active' ? 'inactive' : 'active';
      this.showSuccess('Product status updated');
    },

    showSuccess(message) {
      this.successMessage = message;
      setTimeout(() => { this.successMessage = ''; }, 3000);
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);

      if (diffMins < 60) return diffMins + 'm ago';
      if (diffHours < 24) return diffHours + 'h ago';
      return date.toLocaleDateString();
    }
  }));
});
