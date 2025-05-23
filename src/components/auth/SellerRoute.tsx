
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/auth";
import { Loader2 } from "lucide-react";
import React from "react";

interface SellerRouteProps {
  children?: React.ReactNode;
}

const SellerRoute: React.FC<SellerRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-amber-500" />
          <p className="text-muted-foreground">Loading your seller account...</p>
        </div>
      </div>
    );
  }

  // Redirect to dashboard if user is not a seller
  if (!currentUser?.isSeller) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      {children ? children : <Outlet />}
    </>
  );
};

export default SellerRoute;
