import SigninPage from 'pages/signin';
import registerPage from 'pages/register';
import ChatPage from 'pages/chat';
import ProfilePage from 'src/pages/profile/profile';
import EditProfilePage from 'pages/edit-profile';
import changePasswordPage from 'pages/change-password';
import NotFoundPage from 'pages/not-found';

export const getCurrentPage = () => {
    const path = document.location.pathname;
    switch (path) {
        case '/':
            return new SigninPage({});
        case '/register':
            return new registerPage({});
        case '/chat':
            return new ChatPage({});
        case '/profile':
            return new ProfilePage({});
        case '/edit-profile':
            return new EditProfilePage({});
        case '/change-password':
            return new changePasswordPage({});
        default:
            return new NotFoundPage({});
    }
};