# 🏭 EcoCycle IMS - Multi-Warehouse Inventory Management System

## 📋 Project Overview
EcoCycle Co. distributes eco-friendly products across multiple warehouse locations throughout Asia. This **Multi-Warehouse Inventory Management System (IMS)** tracks inventory across all locations, manages stock movements, prevents stockouts, and supports their sustainability mission through carbon footprint tracking and circular economy flows.

## 🎯 Core Business Problem
EcoCycle struggles with:
- Tracking inventory across **multiple Asian warehouses**
- Coordinating **inter-warehouse transfers**
- Preventing **stockouts** while avoiding overstock
- Measuring **carbon impact** of their eco-friendly operations
- Managing **circular economy flows** (recycling, refurbishing)

## 🏗️ Technical Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, React Icons
- **Backend**: Node.js + Express, Prisma ORM, PostgreSQL (Supabase)
- **Auth**: JWT authentication via Supabase Auth

## 🗄️ Database Schema (17 Models)
1. **User** - Staff authentication & roles
2. **Warehouse** - Multiple locations with sustainability metrics
3. **Product** - Eco-friendly products with carbon tracking
4. **Category** - Product classification hierarchy
5. **Inventory** - Stock levels per warehouse
6. **Transfer** + **TransferItem** - Inter-warehouse movements
7. **StockCount** - Physical inventory counting
8. **Transaction** + **TransactionItem** - Stock movements
9. **Order** + **OrderItem** - Customer order fulfillment
10. **Supplier** + **SupplierProduct** - Vendor management
11. **PurchaseOrder** + **PurchaseOrderItem** - Procurement
12. **Delivery** + **DeliveryItem** - Goods receipt tracking
13. **CarbonTracking** - Carbon impact monitoring
14. **RecyclingRecord** - Circular economy flows
15. **MaterialFlow** - Material input/output analysis
16. **SystemSetting** - Application configuration
17. **AuditLog** - Change tracking and audit trail

## ✅ COMPLETED MODULES

### Backend Infrastructure
- Express server with TypeScript ✓
- PostgreSQL on Supabase ✓
- Prisma ORM with all 17 models ✓
- Environment configuration ✓
- Router setup ✓

### Core Inventory Modules (FULLY COMPLETE)
1. **Warehouse Module** - Service, Controller, Routes ✓
2. **Inventory Module** - Service, Controller, Routes ✓  
3. **Product Module** - Service, Controller, Routes ✓
4. **Category Module** - Service, Controller, Routes ✓

### Transaction & Order Modules (FULLY COMPLETE)
5. **Transaction Module** - Service, Controller, Routes ✓
6. **Order Module** - Service, Controller, Routes ✓

### Supply Chain Modules (FULLY COMPLETE)
7. **Supply Chain Module** - Service, Controller, Routes ✓
   - Suppliers Management ✓
   - Purchase Orders Management ✓
   - Deliveries Management ✓

### Warehouse Operations Modules (COMPLETED)
8. **Transfer Module** - Service, Controller, Routes ✓
   - Inter-warehouse stock movements
   - Transfer workflow (PENDING → COMPLETED)
   - Stock validation and automatic inventory updates
   - Transfer number generation (TRF-YYYYMM-XXXXX)

9. **StockCount Module** - Service, Controller, Routes ✓
   - Physical inventory counting
   - Bulk counting support
   - Variance calculation and tracking
   - Workflow (PENDING → REVIEWED → ADJUSTED)
   - Automatic transaction creation on adjustment

### Sustainability Modules (NEWLY COMPLETED)
10. **Sustainability Module** - Service, Controller, Routes ✓
    - **Carbon Tracking** - `/sustainability/carbon`
      - Track emissions by scope (SCOPE_1, SCOPE_2, SCOPE_3)
      - Monitor by category (TRANSPORT, ENERGY, WASTE, MATERIALS)
      - Source tracking for warehouses and transfers
    
    - **Recycling Records** - `/sustainability/recycling`
      - Track circular economy flows
      - Record by type (PLASTIC, PAPER, METAL, ELECTRONIC, ORGANIC)
      - Calculate carbon saved and landfill diverted
      - Method tracking (MECHANICAL, CHEMICAL, COMPOSTING)
    
    - **Material Flow** - `/sustainability/material-flow`
      - Track material inputs/outputs
      - Categorize flows (INPUT, OUTPUT, WASTE, RECYCLED)
      - Source and destination tracking
      - Material flow analysis

    - **Sustainability Dashboard** - `/sustainability/dashboard`
      - Combined metrics for all sustainability data
      - Warehouse-specific summaries
      - Real-time impact tracking

## 🔄 IN DEVELOPMENT
1. **Authentication Middleware** - JWT validation with Supabase
2. **Seed Data** - Sample data for testing

## ⬜ PENDING MODULES

### Administration Modules
1. **User Management Module** - Staff authentication & roles (User model)
2. **System Settings Module** - Application configuration (SystemSetting model)
3. **Audit Log Module** - Change tracking (AuditLog model)

### Analytics & Reports
4. **Analytics Module** - Stock value, turnover rates
5. **Dashboard Module** - Main dashboard with KPIs

### Integration & Deployment
6. **Frontend Integration** - Connect Next.js frontend
7. **API Documentation** - Swagger/OpenAPI docs
8. **Testing Suite** - Unit and integration tests
9. **Deployment Configuration** - Docker, CI/CD

## 📊 PROGRESS SUMMARY
- **Total Models:** 17
- **Completed Modules:** 10 (covering 14 models)
- **Remaining Models:** 3 (User, SystemSetting, AuditLog)
- **Completion Status:** 82% of backend complete

## 🔄 API Design Pattern
```typescript
// Request Body (same for all search endpoints)
{
  "search": "",           // Search term
  "currentPage": 1,       // Page number (1-based)
  "limit": 10,            // Items per page
  "filters": {},          // Table-specific filters
  "sort": {               // Sorting preferences
    "field": "createdAt",
    "order": "desc"       // "asc" or "desc"
  }
}

// Response Pattern
{
  "success": true,
  "data": [...],          // Array of records
  "pagination": {         // Complete pagination metadata
    "currentPage": 1,
    "limit": 10,
    "total": 145,
    "totalPages": 15,
    "hasNext": true,
    "hasPrev": false
  }
}