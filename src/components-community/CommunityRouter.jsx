import React from 'react'
import { useParams } from 'react-router-dom'

// Import all middlebar components
import Middlebar from './middlebar'
import Middlebardiscover from './middlebar-discover'
import MiddlebarRequests from './middlebarRequests'
import MiddlebarmyCommunity from './middlebarmyCommunity'
import MiddlebarExperts from './middlebarExperts'
import MiddlebarFounderGroup from './middlebarFounderGroup'
import MiddlebarPost from './middlebarPost'
import MiddlebarEvents from './middlebarEvents'
import MiddlebarSettings from './middlebarSettings'

// Component mapping configuration
const componentMap = {
  // Default community page
  'home': Middlebar,
  
  // Main navigation components
  'discover': Middlebardiscover,
  'myCommunity': MiddlebarmyCommunity,
  'requests': MiddlebarRequests,
  'experts': MiddlebarExperts,
  'foundergroup': MiddlebarFounderGroup,
  'post': MiddlebarPost,
  'events': MiddlebarEvents,
  'settings': MiddlebarSettings
}

function CommunityRouter() {
  const { section } = useParams()
  
  // If no section (base /community route), use home component
  // Otherwise, get the component for the current section, fallback to home if not found
  const Component = section ? (componentMap[section] || componentMap['home']) : componentMap['home']
  
  return <Component />
}

export default CommunityRouter
