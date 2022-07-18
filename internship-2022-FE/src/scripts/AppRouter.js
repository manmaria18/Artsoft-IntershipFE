import Router from 'client-router';

/** The App's Router. */
class AppRouter {
    /**
     * Instantiate router.
     */
    route = new Router();

    /**
     * Constructor method.
     * @param {object} config - The config object.
     */
    constructor(config) {
        const {routes, elements} = config;

        this.routes = routes;
        this.elements = document.querySelectorAll(elements);
        this.buttons = document.querySelectorAll('[data-target]');

        this.buildRoutes();
        this.hideAll();
        this.handleButtons();
    }

    /**
     * Build Routes.
     * @return {void}
     */
    buildRoutes() {
        this.route((match) => {
            this.routes.forEach((route) => {
                if (match(route.match)) {
                    this.elements.forEach((element) => {
                        if (element.classList.contains(route.target)) {
                            this.hideAll();
                            element.style.display = 'block';
                        }
                    });
                }
            });
        });
    }

    /**
     * Hide all pages.
     * @return {void}
     */
    hideAll() {
        this.elements.forEach((element) => {
            element.style.display = 'none';
        });
    }

    /**
     * Handle target buttons.
     * @return {void}
     */
    handleButtons() {
        const go = this.route.go;

        this.buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const route = this.routes.find((route) =>
                    e.target.dataset.target === route.target,
                );
                go(route.match);
            });
        });
    }
}

export default AppRouter;
