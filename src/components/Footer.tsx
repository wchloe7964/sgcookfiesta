// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-section img text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
