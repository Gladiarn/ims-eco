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

### **Frontend**
- **Next.js 14** (React framework with App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Icons** (Md icons) for UI icons

### **Backend**
- **Node.js + Express** server
- **Prisma ORM** for database operations
- **PostgreSQL** database (hosted on Supabase)
- **JWT authentication** via Supabase Auth

### **Authentication & Infrastructure**
- **Supabase** for:
  - PostgreSQL database hosting
  - Authentication (email/password, JWT management)
  - Automatic token refresh (`autoRefreshToken: true`)
- **Modern Auth Flow**: Frontend → Supabase Auth → Your Backend

## 🗄️ Database Schema (Complete - 17 Models)

### **Core Inventory Models:**
1. **User** - Staff authentication & role management
2. **Warehouse** - Multiple Asian locations with sustainability metrics
3. **Product** - Eco-friendly products with carbon footprint tracking
4. **Category** - Product classification system (with hierarchy)
5. **Inventory** - Stock levels per warehouse (links Products + Warehouses)
6. **Transfer** + **TransferItem** - Inter-warehouse stock movements
7. **StockCount** - Physical inventory counting & reconciliation

### **Transaction & Order Models:**
8. **Transaction** + **TransactionItem** - Stock movements (In/Out/Adjustments)
9. **Order** + **OrderItem** - Customer order fulfillment
10. **Supplier** + **SupplierProduct** - Vendor management
11. **PurchaseOrder** + **PurchaseOrderItem** - Procurement management
12. **Delivery** + **DeliveryItem** - Goods receipt tracking

### **Sustainability Models:**
13. **CarbonTracking** - Carbon impact monitoring (Scope 1, 2, 3)
14. **RecyclingRecord** - Circular economy flows tracking
15. **MaterialFlow** - Material input/output analysis

### **Administration Models:**
16. **SystemSetting** - Application configuration
17. **AuditLog** - Change tracking and audit trail

## 🚀 Current Status (Updated)

### ✅ **Completed:**

#### **Backend Infrastructure**
- Express server setup with TypeScript ✓
- PostgreSQL database on Supabase ✓
- Prisma ORM configured with all 17 models ✓
- Environment configuration with dotenv ✓
- Router issues resolved (using `express.Router()`) ✓

#### **Warehouse Module ✓**
- **Controller**: All CRUD + search with pagination/filters
- **Service**: Business logic with Prisma queries
- **Routes**: RESTful API endpoints
- **Features**: Search, filtering, sorting, pagination

#### **Inventory Module ✓**
- **Controller**: Complete inventory management
- **Service**: Stock tracking, low stock alerts, value calculations
- **Routes**: Full CRUD with advanced search
- **Features**: Multi-warehouse inventory, reorder status tracking

### 🔄 **In Development:**
1. **Product Module** - Under construction
2. **Category Module** - Next in queue
3. **Authentication Middleware** - JWT validation with Supabase

### ⬜ **Pending:**
1. **Transaction Module** - Stock movements
2. **Order Module** - Fulfillment system
3. **Supply Chain Modules** - Suppliers, Purchase Orders, Deliveries
4. **Sustainability Modules** - Carbon tracking, recycling
5. **Seed Data** - Sample data for testing
6. **Frontend Integration** - Connect Next.js frontend

## 🔄 **API Design Pattern**

### **Consistent Search Pattern for ALL Tables:**
Every table/search endpoint uses the same **POST-based search** with pagination:

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