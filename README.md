# 🏭 EcoCycle IMS - Multi-Warehouse Inventory Management System

## 📋 Project Overview
EcoCycle Co. distributes eco-friendly products across multiple warehouse locations throughout Asia. This **Multi-Warehouse Inventory Management System (IMS)** will track inventory across all locations, manage stock movements, prevent stockouts, and support their sustainability mission through carbon tracking.

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

## 🔐 Authentication Architecture

### **Traditional vs Modern (Our Choice)**