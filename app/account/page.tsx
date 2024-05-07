// page.tsx
import AccountForm from './form';

export default function AccountPage() {
  return (
    <div className="min-h-screen w-8/12 bg-custom-brown2 flex items-center justify-center rounded-3xl">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-customOrange">Account Settings</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Warning</h3>
              <p className="text-gray-600">This action cannot be undone </p>
            </div>
          </div>
          <div className="col-span-2">
            <AccountForm />
          </div>
        </div>
      </div>
    </div>
  );
}