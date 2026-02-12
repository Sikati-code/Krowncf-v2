import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus,
  ArrowRight,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import type { CartItem } from '@/types';
import { toast } from 'sonner';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
  onUpdateQuantity: (designId: string, quantity: number) => void;
  onRemoveItem: (designId: string) => void;
  onClearCart: () => void;
  t: (key: string) => string;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  t
}: CartDrawerProps) {
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    toast.success('Proceeding to checkout...');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-[#0a0a0a] border-l border-kcf-red/30 flex flex-col">
        <SheetHeader className="border-b border-white/10 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-3 text-white">
              <ShoppingCart className="w-6 h-6 text-kcf-red" />
              {t('shoppingCart')}
              <Badge className="bg-kcf-red text-white">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </Badge>
            </SheetTitle>
          </div>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-white/30" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('yourCartIsEmpty')}</h3>
            <p className="text-white/60 mb-6">
              Browse our collection and add some amazing designs to your cart.
            </p>
            <Button
              onClick={onClose}
              className="bg-kcf-red hover:bg-kcf-dark-red text-white"
            >
              {t('startShopping')}
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.design.id}
                  className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-kcf-red/30 transition-all"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.design.image}
                      alt={item.design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-white font-medium line-clamp-1">
                          {item.design.title}
                        </h4>
                        <p className="text-sm text-white/50">{item.design.category}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.design.id)}
                        className="p-1.5 text-white/40 hover:text-kcf-red hover:bg-kcf-red/10 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.design.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-lg text-white hover:bg-kcf-red transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.design.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-lg text-white hover:bg-kcf-red transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-kcf-red font-semibold">
                          ${(item.design.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-xs text-white/40">
                          ${item.design.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-4 space-y-4">
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white/60">
                  <span>{t('subtotal')}</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-white/60">
                  <span>{t('tax')} (10%)</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-white font-semibold text-lg pt-2 border-t border-white/10">
                  <span>{t('total')}</span>
                  <span className="text-kcf-red">${(cartTotal * 1.1).toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white py-6 rounded-xl font-medium transition-all hover:scale-[1.02] shine-effect"
                >
                  {t('proceedToCheckout')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={onClearCart}
                    variant="outline"
                    className="flex-1 border-white/20 text-white/60 hover:text-kcf-red hover:border-kcf-red"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    {t('clearCart')}
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    {t('continueShopping')}
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
