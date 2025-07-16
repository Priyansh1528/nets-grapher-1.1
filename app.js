@@ .. @@
     hideLogin();
     
     setTimeout(() => {
-  if (state.tab === 'serial') state.serialMonitor.renderSidebar();
-  else if (state.tab === 'live') state.liveGraph.renderSidebar();
-  else if (state.tab === 'file') state.fileGraph.renderSidebar();
-  else if (state.tab === 'settings') state.settings.renderSidebar();
-}, 50);
+      // Render the sidebar for the current active tab immediately after login
+      if (window.appState) {
+        if (window.appState.tab === 'serial') window.appState.serialMonitor.renderSidebar();
+        else if (window.appState.tab === 'live') window.appState.liveGraph.renderSidebar();
+        else if (window.appState.tab === 'file') window.appState.fileGraph.renderSidebar();
+        else if (window.appState.tab === 'settings') window.appState.settings.renderSidebar();
+      }
+    }, 50);
 
   } else {
@@ .. @@
 state.fileGraph = new FileGraph(state);
 state.settings = new Settings(state);
 
+// Make state globally accessible for login callback
+window.appState = state;
+
 // Initialize drive integration
@@ .. @@
       // Render appropriate sidebar
       if (tab === 'serial') state.serialMonitor.renderSidebar();
       else if (tab === 'live') state.liveGraph.renderSidebar();
       else if (tab === 'file') state.fileGraph.renderSidebar();
       else if (tab === 'settings') state.settings.renderSidebar();
     }, 150);
   } else {
     document.querySelectorAll('.tab-content').forEach(d => d.classList.remove('active'));
     const newTab = document.getElementById(`tab-${tab}`);
     if (newTab) newTab.classList.add('active');

     if (tab === 'serial') state.serialMonitor.renderSidebar();
     else if (tab === 'live') state.liveGraph.renderSidebar();
     else if (tab === 'file') state.fileGraph.renderSidebar();
     else if (tab === 'settings') state.settings.renderSidebar();
   }
   };
+
+// Render initial sidebar for the default tab (serial) after components are initialized
+setTimeout(() => {
+  if (loginInfo && loginInfo.username) {
+    state.serialMonitor.renderSidebar();
+  }
+}, 100);
+
    // Add CSS for smooth transitions