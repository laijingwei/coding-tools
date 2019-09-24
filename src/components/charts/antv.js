export default Vue.component('antv', {
  template: '#antv',
  data() {
    return {
      data: {},
    }
  },
  methods: {
    async getData() {
      let res = await axios.get('json/modeling-methods')
      this.data = res.data
      this.treeDendrogram()
    },
    treeDendrogram() {
      G6.registerNode('treeNode', {
        anchor: [[0, 0.5], [1, 0.5]]
      });
      G6.registerEdge('smooth', {
        getPath: function getPath(item) {
          var points = item.getPoints();
          var start = points[0];
          var end = points[points.length - 1];
          var hgap = Math.abs(end.x - start.x);
          if (end.x > start.x) {
            return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
          }
          return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
        }
      });
      var layout = new G6.Layouts.Dendrogram({
        "direction": "LR",
        "nodeSize": 20,
        "rankSep": 200
      });
      var tree = new G6.Tree({
        id: 'mountNode', // 容器ID
        height: window.innerHeight, // 画布高
        layout: layout,
        fitView: 'autoZoom' // 自动缩放
      });
      tree.node({
        shape: 'treeNode',
        size: 8,
        label: function label(model) {
          if (model.children && model.children.length > 0) {
            return {
              text: model.id,
              textAlign: 'right'
            };
          }
          return {
            text: model.id,
            textAlign: 'left'
          };
        },
        labelOffsetX: function labelOffsetX(model) {
          if (model.children && model.children.length > 0) {
            return -10;
          }
          return 10;
        }
      });
      tree.edge({
        shape: 'smooth'
      });
      tree.read({
        roots: [this.data]
      });
    }
  },
  mounted() {
    this.getData()
  }
})
