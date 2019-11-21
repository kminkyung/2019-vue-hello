/* Import Model */
import PrdResult from './models/PrdResult.js'

/* Import  Component */
import SearchComponent from './components/searchComponent.js'


new Vue({
	el: "#app",
	data: {
		title: "vue를 배워봅시다.",
		isPrdView: true,
		searchBarQuery: '',
		isSubmit: false
	},
	created() {
	},
	components: {
		'search-bar': SearchComponent,
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
		onSearchReset() {
			this.isSubmit = false;
			this.items = []; // items 초기화
		},
		onSubmit(query) {
			this.searchBarQuery = query;
			this.searchResult();
		},
		searchResult() {
			PrdResult.list().then((result) => {
				this.isSubmit = true;
				this.items = result;
			});
		}
	}
});