import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sorting from "./pages/Sorting";
import Graph from "./pages/Graph";
import Stack from "./pages/Stack";
import Tree from "./pages/Tree";
import Queue from "./pages/Queue";
import About from "./pages/About";
import SortingVisualizer from "./pages/SortingVisualizer";
import StackVisualizer from "./pages/StackVisualizer";
import QueueVisualizer from "./pages/QueueVisualizer";

import DijkstraVisualizer from "./pages/DijkstraVisualizer";

import { getSelectionSortAnimations } from "./algorithms/sorting/selectionSort";
import { getInsertionSortAnimations } from "./algorithms/sorting/insertionSort";
import { getBubbleSortAnimations } from "./algorithms/sorting/bubbleSort";
import { getMergeSortAnimations } from "./algorithms/sorting/mergeSort";
import { getQuickSortAnimations } from "./algorithms/sorting/quickSort";
import { getCyclicSortAnimations } from "./algorithms/sorting/cyclicSort";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/graph/dijkstra" element={<DijkstraVisualizer />} />
        <Route path="/about" element={<About />} />
        <Route path="/queue/operations" element={<QueueVisualizer />} />
        <Route path="/stack/operations" element={<StackVisualizer />} />
        <Route path="/sorting/selection-sort" element={<SortingVisualizer title="Selection Sort" getAnimations={getSelectionSortAnimations} />} />
        <Route path="/sorting/insertion-sort" element={<SortingVisualizer title="Insertion Sort" getAnimations={getInsertionSortAnimations} />} />
        <Route path="/sorting/bubble-sort" element={<SortingVisualizer title="Bubble Sort" getAnimations={getBubbleSortAnimations} />} />
        <Route path="/sorting/merge-sort" element={<SortingVisualizer title="Merge Sort" getAnimations={getMergeSortAnimations} />} />
        <Route path="/sorting/quick-sort" element={<SortingVisualizer title="Quick Sort" getAnimations={getQuickSortAnimations} />} />
        <Route path="/sorting/cyclic-sort" element={<SortingVisualizer title="Cyclic Sort" getAnimations={getCyclicSortAnimations} />} />
                {/* ✅ NEW */}
        <Route
          path="/sorting/selection-sort"
          element={
            <SortingVisualizer
              title="Selection Sort"
              getAnimations={getSelectionSortAnimations}
              type="selection"
            />
          }
        />

        <Route
          path="/sorting/insertion-sort"
          element={
            <SortingVisualizer
              title="Insertion Sort"
              getAnimations={getInsertionSortAnimations}
              type="insertion"
            />
          }
        />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;