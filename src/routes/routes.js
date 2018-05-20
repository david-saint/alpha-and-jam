import RolexWatch from '../components/RolexWatch.vue'
import GoalScored from '../components/GoalScored.vue'
import GroupTable from '../components/GroupTable.vue'
import JohnnieWalker from '../components/JohnnieWalker.vue'
import BridalWedding from '../components/BridalWedding.vue'
import GoalHighlights from '../components/GoalHighlights.vue'
import MatchCountdown from '../components/MatchCountdown.vue'
import MatchPossession from '../components/MatchPossession.vue'
import NaijaSupporters from '../components/NaijaSupporters.vue'

export const routes = [
	{
		path: '/',
		component: MatchCountdown
	},
	{
		path: '/rolex',
		component: RolexWatch
	},
	{
		path: '/possession',
		component: MatchPossession
	},
	{
		path: '/goal',
		component: GoalScored,
		props: true
	},
	{
		name: 'goal',
		path: '/goal/:score/:assist/:time',
		component: GoalScored,
		props: true
	},
	{
		path: '/group',
		component: GroupTable
	},
	{
		path: '/naija',
		component: NaijaSupporters
	},
	{
		path: '/johnnie',
		component: JohnnieWalker
	},
	{
		path: '/highlight',
		component: GoalHighlights
	},
	{
		path: '/brides',
		component: BridalWedding
	}
]