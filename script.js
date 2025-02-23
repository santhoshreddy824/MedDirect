let currentUser = null;

        function toggleForms() {
            document.getElementById('registerForm').classList.toggle('hidden');
            document.getElementById('loginForm').classList.toggle('hidden');
        }

        function showPasswordReset() {
            document.getElementById('authForms').classList.add('hidden');
            document.getElementById('passwordReset').classList.remove('hidden');
        }

        function showLogin() {
            document.getElementById('authForms').classList.remove('hidden');
            document.getElementById('passwordReset').classList.add('hidden');
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            currentUser = { email, name: "Test User" };
            showProfile();
            alert('Login successful!');
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            
            currentUser = { email, name };
            showProfile();
            alert('Registration successful!');
        });

        document.getElementById('resetForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('resetEmail').value;
            const password = document.getElementById('resetPassword').value;
            
            alert('Password reset instructions sent to email!');
            showLogin();
        });

        function showProfile() {
            document.getElementById('authForms').classList.add('hidden');
            document.getElementById('passwordReset').classList.add('hidden');
            document.getElementById('profileSection').classList.remove('hidden');
            document.getElementById('navLinks').classList.remove('hidden');
            
            if(currentUser) {
                document.getElementById('profileName').value = currentUser.name;
                document.getElementById('profileEmail').value = currentUser.email;
            }
        }

        function logout() {
            currentUser = null;
            document.getElementById('authForms').classList.remove('hidden');
            document.getElementById('profileSection').classList.add('hidden');
            document.getElementById('navLinks').classList.add('hidden');
            showLogin();
        }